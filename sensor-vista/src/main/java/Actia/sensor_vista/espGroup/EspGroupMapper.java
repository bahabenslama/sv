package Actia.sensor_vista.espGroup;

import Actia.sensor_vista.instance.Instance;
import org.springframework.stereotype.Service;

@Service
public class EspGroupMapper {
    public EspGroup toEspGroup(EspGroupRequest request) {
        return EspGroup.builder()
                .channelType(request.channelType())
                .instance(Instance.builder()
                        .id(request.instanceId())
                        .archived(false)
                        .build())
                .build();

    }

    public EspGroupResponse toEspGroupResponse(EspGroup espGroup, Integer id) {
        return EspGroupResponse.builder()
                .channelType(espGroup.getChannelType())
                .instance(espGroup.getInstance().getName())
                .build();
    }
}
