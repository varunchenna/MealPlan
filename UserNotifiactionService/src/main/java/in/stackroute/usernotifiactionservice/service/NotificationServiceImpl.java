package in.stackroute.usernotifiactionservice.service;

import in.stackroute.usernotifiactionservice.exceptions.NotificationNotFoundException;
import in.stackroute.usernotifiactionservice.model.Notification;
import in.stackroute.usernotifiactionservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;

    public List<Notification> getall() {

        return notificationRepository.findAll();
    }

    public Notification getNotify(int id) {
        return (Notification) notificationRepository.findById(id).orElseThrow(() -> {
            return new NotificationNotFoundException("Notification with id not found");
        });
    }

    public Notification saveNotify(Notification notification) {
        return (Notification) notificationRepository.save(notification);
    }

    @Override
    public Notification updatenotify(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public void deleteById(int id) {
        notificationRepository.deleteById(id);
    }

    @Override
    public boolean existsById(int id) {
        if (!notificationRepository.existsById(id)) {
            throw new NotificationNotFoundException("Reminder not found with id: " + id);
        }
        return true;
    }

}