package Actia.sensor_vista.instance;

import Actia.sensor_vista.file.FileUtils;
import org.springframework.stereotype.Service;

@Service
public class InstanceMapper {
    public static Instance toInstance(InstanceRequest request) {
        return Instance.builder()
                .id(request.id())
                .name(request.name())
                .archived(false)
                .build();
    }

    public InstanceResponse toInstanceResponse(Instance instance) {
        return InstanceResponse.builder()
                .id(instance.getId())
                .name(instance.getName())
                .archived(instance.isArchived())
                .owner(instance.getOwner().getFullName())
                .cover(FileUtils.readFileFromLocation(instance.getInstanceCover()))
                .build();
    }
}
