package Actia.sensor_vista.instance;

import Actia.sensor_vista.common.PageResponse;
import Actia.sensor_vista.file.FileStorageService;
import Actia.sensor_vista.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static Actia.sensor_vista.instance.InstanceSpecification.withOwnerId;

@Service
@RequiredArgsConstructor
public class InstanceService {
    private final InstanceMapper instanceMapper;
    private final InstanceRepository instanceRepository;
    private final FileStorageService fileStorageService;
    public Integer save(InstanceRequest request, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Instance instance = InstanceMapper.toInstance(request);
        instance.setOwner(user);
        return instanceRepository.save(instance).getId();
    }

    public InstanceResponse findById(Integer instanceId) {
        return instanceRepository.findById(instanceId)
                .map(instanceMapper::toInstanceResponse)
                .orElseThrow(() -> new EntityNotFoundException("No instance found with the ID: " +instanceId));
    }

    public PageResponse<InstanceResponse> findAllInstances(int page, int size, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdDate").descending());
        Page<Instance> instances = instanceRepository.findAllDisplayableInstances(pageable, user.getId());
        List<InstanceResponse> instanceResponse = instances.stream()
                .map(instanceMapper::toInstanceResponse)
                .toList();

        return new PageResponse<>(
                instanceResponse,
                instances.getNumber(),
                instances.getSize(),
                instances.getTotalElements(),
                instances.getTotalPages(),
                instances.isFirst(),
                instances.isLast()
        );
    }

    public PageResponse<InstanceResponse> findAllInstancesByOwner(int page, int size, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdDate").descending());
        Page<Instance> instances = instanceRepository.findAll(withOwnerId(user.getId()), pageable);
       List<InstanceResponse> instanceResponse = instances.stream()
               .map(instanceMapper::toInstanceResponse)
               .toList();
       return new PageResponse<>(
               instanceResponse,
               instances.getNumber(),
               instances.getSize(),
               instances.getTotalElements(),
               instances.getTotalPages(),
               instances.isFirst(),
               instances.isLast()
       );
    }

    public void uploadInstanceCoverPicture(MultipartFile file, Authentication connectedUser, Integer instanceId) {
        Instance instance = instanceRepository.findById(instanceId)
                .orElseThrow(() -> new EntityNotFoundException("No instance found with the ID: " + instanceId));
        User user =((User) connectedUser.getPrincipal());
        var instanceCover = fileStorageService.saveFile(file, user.getId());
        instance.setInstanceCover(instanceCover);
        instanceRepository.save(instance);
    }
}
