package Actia.sensor_vista.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequest {
    @Email(message = "Email is not formatted")
    @NotEmpty(message = "Email is not mandatory")
    @NotBlank(message = "Email is not mandatory")
    private String email;
    @Size(min = 8, message = "Password should be 8 characters long minimum")
    @NotEmpty(message = "Password is not mandatory")
    @NotBlank(message = "Password is not mandatory")
    private String password;
}
