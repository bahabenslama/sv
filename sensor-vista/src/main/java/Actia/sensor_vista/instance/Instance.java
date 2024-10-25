package Actia.sensor_vista.instance;

import Actia.sensor_vista.common.BaseEntity;
import Actia.sensor_vista.espGroup.EspGroup;
import Actia.sensor_vista.user.User;
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
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Instance extends BaseEntity {

    private String name;
    private boolean archived;
    private String instanceCover;
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;
    @OneToMany(mappedBy = "instance")
    private List<EspGroup> espGroups;

}
