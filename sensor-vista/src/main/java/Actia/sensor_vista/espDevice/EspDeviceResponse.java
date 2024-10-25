package Actia.sensor_vista.espDevice;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EspDeviceResponse {
    private String localIpAddress;
    private String log;
    private String espGroup;
}
