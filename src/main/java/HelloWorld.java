import java.util.logging.Logger;

/**
 * Created by guy on 19/04/2016.
 */
public class HelloWorld {

    public static void main(String[] args){
        System.out.println("Hellooooo world");
        Logger log = Logger.getLogger(String.valueOf(HelloWorld.class));
        log.info("Tal netserr");

    }



}
