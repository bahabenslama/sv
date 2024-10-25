package Actia.sensor_vista.espDevice;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record EspDeviceRequest(
        @NotEmpty(message = "400")
        @NotNull(message = "400")
        @NotBlank(message = "400")
        String localIpAddress,
        @NotEmpty(message = "401")
        @NotNull(message = "401")
        @NotBlank(message = "401")
        String log,
        @NotNull(message = "402")
        Integer espGroupId
) {

}
