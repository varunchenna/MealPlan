package in.stackroute.usernotifiactionservice.controller;

import in.stackroute.usernotifiactionservice.model.Notification;
import in.stackroute.usernotifiactionservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin({"http://localhost:4200"})
@RequestMapping({"api/v1/notify"})
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping({"/all"})
    ResponseEntity<List<Notification>> AllNotifications() {
        List<Notification> notifies = notificationService.getall();
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(notifies);
    }

    @GetMapping({"/{id}"})
    ResponseEntity<Notification> Onenotificetion(@PathVariable("id") int id) {
        Notification notify = notificationService.getNotify(id);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(notify);
    }

    @PostMapping({"/add"})
    ResponseEntity<Notification> AddNotification(@RequestBody Notification notification) {
        Notification saved = notificationService.saveNotify(notification);
        return ResponseEntity.status(HttpStatusCode.valueOf(202)).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notification> updateReminder(@PathVariable int id, @RequestBody Notification notification) {

        if (!notificationService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        notification.setId(id);
        var updatedReminder = notificationService.updatenotify(notification);
        return ResponseEntity.ok(updatedReminder);
    }

    // DELETE /api/v1/reminders/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReminder(@PathVariable int id) {
        if (!notificationService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        notificationService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}