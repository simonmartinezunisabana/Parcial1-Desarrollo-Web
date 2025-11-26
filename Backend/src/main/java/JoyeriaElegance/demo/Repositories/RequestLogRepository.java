package JoyeriaElegance.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import JoyeriaElegance.demo.Entities.RequestLog;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestLogRepository extends JpaRepository <RequestLog, Integer>{
    
}