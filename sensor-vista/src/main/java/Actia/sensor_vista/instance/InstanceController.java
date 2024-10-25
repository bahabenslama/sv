package Actia.sensor_vista.instance;

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
@RequestMapping("instances")
@RequiredArgsConstructor
@Tag(name = "Instance")
public class InstanceController {
    private final InstanceService service;
    @PostMapping
    public ResponseEntity<Integer> saveInstance(
            @Valid @RequestBody InstanceRequest request,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.save(request, connectedUser));
    }
    @GetMapping("{instance-id}")
    public ResponseEntity<InstanceResponse> findInstanceById(
            @PathVariable("instance-id") Integer instanceId
    ) {
        return ResponseEntity.ok(service.findById(instanceId));
    }
    @GetMapping
    public ResponseEntity<PageResponse<InstanceResponse>> findAllInstances(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.findAllInstances(page, size, connectedUser));
    }
    @GetMapping("/owner")
    public ResponseEntity<PageResponse<InstanceResponse>> findAllInstancesByOwner(
        @RequestParam(name = "page", defaultValue = "0", required = false) int page,
        @RequestParam(name = "size", defaultValue = "10", required = false) int size,
        Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.findAllInstancesByOwner(page, size, connectedUser));

    }
    @PostMapping(value = "/cover/{instance-id}", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadInstanceCoverPicture(
            @PathVariable("instance-id") Integer instanceId,
            @Parameter()
            @RequestPart("file") MultipartFile file,
            Authentication connectedUser
            ) {
        service.uploadInstanceCoverPicture(file, connectedUser, instanceId);
        return ResponseEntity.accepted().build();
    }
}
