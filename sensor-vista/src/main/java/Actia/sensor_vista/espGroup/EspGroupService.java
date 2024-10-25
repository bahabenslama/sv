package Actia.sensor_vista.espGroup;

import Actia.sensor_vista.common.PageResponse;
import Actia.sensor_vista.instance.Instance;
import Actia.sensor_vista.instance.InstanceRepository;
import Actia.sensor_vista.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EspGroupService {
    private final InstanceRepository instanceRepository;
    private final EspGroupMapper espGroupMapper;
    private final EspGroupRepository espGroupRepository;
    public Integer save(EspGroupRequest request) {
        Instance instance = instanceRepository.findById(request.instanceId())
                .orElseThrow(() ->new EntityNotFoundException("No instance found with the ID: "+ request.instanceId()));
        EspGroup espGroup = espGroupMapper.toEspGroup(request);
        espGroup.setInstance(instance);
        return espGroupRepository.save(espGroup).getId();
    }

    public PageResponse<EspGroupResponse> findAllEspGroupByInstance(Integer instanceId, int page, int size, Authentication connectedUser) {
        Pageable pageable = PageRequest.of(page, size);
        User user = ((User) connectedUser.getPrincipal());
        Page<EspGroup> espGroups = espGroupRepository.findAllByInstanceId(instanceId, pageable);
        List<EspGroupResponse> espGroupResponses = espGroups.stream()
                .map(f -> espGroupMapper.toEspGroupResponse(f, user.getId()))
                .toList();
        return new PageResponse<>(
                espGroupResponses,
                espGroups.getNumber(),
                espGroups.getSize(),
                espGroups.getTotalElements(),
                espGroups.getTotalPages(),
                espGroups.isFirst(),
                espGroups.isLast()
        );

    }
}
