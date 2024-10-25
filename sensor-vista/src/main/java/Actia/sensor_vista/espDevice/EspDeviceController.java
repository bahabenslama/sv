package Actia.sensor_vista.espDevice;

import Actia.sensor_vista.common.PageResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("espDevices")
@Tag(name = "EspDevice")
public class EspDeviceController {
    private final EspDeviceService service;
    @PostMapping
    public ResponseEntity<Integer> saveEspDevice(
            @Valid @RequestBody EspDeviceRequest request,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.save(request, connectedUser));
    }
    @GetMapping("/espGroup/{espGroup-id}")
    public ResponseEntity<PageResponse<EspDeviceResponse>> findAllEspDevicesByEspGroup(
            @PathVariable("espGroup-id") Integer espGroupId,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication connectedUser

    ) {
        return ResponseEntity.ok(service.findAllEspDeviceByEspGroup(espGroupId, page, size, connectedUser));

    }
    @PostMapping(value = "/cover/{espDevice-id}", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadEspDeviceCoverPicture(
            @PathVariable("espDevice-id") Integer espDeviceId,
            @Parameter()
            @RequestParam("file") MultipartFile file,
            Authentication connectedUser
    ) {
        service.uploadEspDeviceCoverPicture(file, connectedUser, espDeviceId);
        return ResponseEntity.accepted().build();

    }

}
