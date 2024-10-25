package Actia.sensor_vista.espGroup;

import Actia.sensor_vista.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("espGroups")
@Tag(name = "EspGroup")
public class EspGroupController {
    private final EspGroupService service;
    @PostMapping
    public ResponseEntity<Integer> saveEspGroup(
            @Valid @RequestBody EspGroupRequest request
    ) {
        return ResponseEntity.ok(service.save(request));
    }
    @GetMapping("/instance/{instance-id}")
    public ResponseEntity<PageResponse<EspGroupResponse>> findAllEspGroupByInstance(
            @PathVariable("instance-id") Integer instanceId,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(service.findAllEspGroupByInstance(instanceId, page, size, connectedUser));
    }

}
