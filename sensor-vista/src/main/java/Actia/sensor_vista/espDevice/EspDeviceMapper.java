package Actia.sensor_vista.espDevice;

import Actia.sensor_vista.espGroup.EspGroup;
import org.springframework.stereotype.Service;

@Service
public class EspDeviceMapper {
    public EspDevice toEspDevice(EspDeviceRequest request) {
        return EspDevice.builder()
                .localIpAddress(request.localIpAddress())
                .log(request.log())
                .espGroup(EspGroup.builder()
                        .id(request.espGroupId()).build())
                .build();
    }

    public EspDeviceResponse toEspDeviceResponse(EspDevice esd, Integer id) {
        return EspDeviceResponse.builder()
                .localIpAddress(esd.getLocalIpAddress())
                .espGroup(esd.getEspGroup().getChannelType())
                .build();
    }
}
