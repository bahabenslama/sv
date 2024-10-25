package Actia.sensor_vista.instance;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record InstanceRequest(
        Integer id,

        String name,

        boolean archived
) {
}
