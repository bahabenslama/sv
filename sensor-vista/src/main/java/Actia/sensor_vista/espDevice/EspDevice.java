package Actia.sensor_vista.espDevice;

import Actia.sensor_vista.common.BaseEntity;
import Actia.sensor_vista.espGroup.EspGroup;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class EspDevice extends BaseEntity {

    private String localIpAddress;
    private String log;
    private String espDeviceCover;
    @ManyToOne
    @JoinColumn(name = "espGroup_id")
    private EspGroup espGroup;

}
