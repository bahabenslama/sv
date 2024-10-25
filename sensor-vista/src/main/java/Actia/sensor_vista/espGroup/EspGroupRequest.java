package Actia.sensor_vista.espGroup;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record EspGroupRequest(
        @NotEmpty(message = "200")
        @NotNull(message = "200")
        @NotBlank(message = "200")
        String channelType,
        @NotNull(message = "201")
        Integer instanceId
) {
}
