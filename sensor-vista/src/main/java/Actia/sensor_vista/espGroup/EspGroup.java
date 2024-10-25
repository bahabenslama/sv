package Actia.sensor_vista.espGroup;

import Actia.sensor_vista.common.BaseEntity;
import Actia.sensor_vista.espDevice.EspDevice;
import Actia.sensor_vista.instance.Instance;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class EspGroup extends BaseEntity {

    private String channelType;
    @ManyToOne
    @JoinColumn(name = "instance_id")
    private Instance instance;
    @OneToMany(mappedBy = "espGroup")
    private List<EspDevice> espDevices;
}
