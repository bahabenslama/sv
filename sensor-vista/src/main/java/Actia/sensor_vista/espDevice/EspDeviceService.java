package Actia.sensor_vista.espDevice;

import Actia.sensor_vista.common.PageResponse;
import Actia.sensor_vista.espGroup.EspGroup;
import Actia.sensor_vista.espGroup.EspGroupRepository;
import Actia.sensor_vista.file.FileStorageService;
import Actia.sensor_vista.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EspDeviceService {
    private final EspGroupRepository espGroupRepository;
    private final EspDeviceMapper espDeviceMapper;
    private final EspDeviceRepository espDeviceRepository;
    private final FileStorageService fileStorageService;
    public Integer save(EspDeviceRequest request, Authentication connectedUser) {
        EspGroup espGroup = espGroupRepository.findById(request.espGroupId())
                .orElseThrow(() -> new EntityNotFoundException("No esp group found with the Id : " + request.espGroupId()));
        User user =((User) connectedUser.getPrincipal());
        EspDevice espDevice = espDeviceMapper.toEspDevice(request);
        espDevice.setEspGroup(espGroup);
        return espDeviceRepository.save(espDevice).getId();
    }

    public PageResponse<EspDeviceResponse> findAllEspDeviceByEspGroup(Integer espGroupId, int page, int size, Authentication connectedUser) {
        Pageable pageable = PageRequest.of(page, size);
        User user =((User) connectedUser.getPrincipal());
        Page<EspDevice> espDevices = espDeviceRepository.findAllByEspGroupId(espGroupId, pageable);
        List<EspDeviceResponse> espDeviceResponses = espDevices.stream()
                .map(esd -> espDeviceMapper.toEspDeviceResponse(esd, user.getId()))
                .toList();
        return new PageResponse<>(
                espDeviceResponses,
                espDevices.getNumber(),
                espDevices.getSize(),
                espDevices.getTotalElements(),
                espDevices.getTotalPages(),
                espDevices.isFirst(),
                espDevices.isLast()
        );

    }

    public void uploadEspDeviceCoverPicture(MultipartFile file, Authentication connectedUser, Integer espDeviceId) {
        EspDevice espDevice = espDeviceRepository.findById(espDeviceId)
                .orElseThrow(() -> new EntityNotFoundException("No esp device found with the ID: " + espDeviceId));
        User user = ((User) connectedUser.getPrincipal());
        var espDeviceCover = fileStorageService.saveFile(file, user.getId());
        espDevice.setEspDeviceCover(espDeviceCover);
        espDeviceRepository.save(espDevice);
    }
}
