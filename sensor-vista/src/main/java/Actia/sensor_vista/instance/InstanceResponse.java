package Actia.sensor_vista.instance;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InstanceResponse {
    private Integer id;
    private String name;
    private boolean archived;
    private String owner;
    private byte[] cover;
}
