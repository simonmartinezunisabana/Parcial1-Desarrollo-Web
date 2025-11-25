package JoyeriaElegance.demo.Authentication.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import JoyeriaElegance.demo.Authentication.Entities.RequestLog;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestLogRepository extends JpaRepository <RequestLog, Integer>{
    
}