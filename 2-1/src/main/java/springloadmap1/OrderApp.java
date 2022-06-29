package springloadmap1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import springloadmap1.member.Grade;
import springloadmap1.member.Member;
import springloadmap1.member.MemberService;
import springloadmap1.member.MemberServiceImpl;
import springloadmap1.order.Order;
import springloadmap1.order.OrderService;
import springloadmap1.order.OrderServiceImpl;

public class OrderApp {

    public static void main(String[] args){

//        AppConfig appConfig = new AppConfig();
//        MemberService memberService = appConfig.memberService();
//        OrderService orderService = appConfig.orderService();

        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);

        MemberService memberService = applicationContext.getBean("memberService",MemberService.class);
        OrderService orderService = applicationContext.getBean("orderService",OrderService.class);

        Long memberId = 1L;
        Member member = new Member(memberId,"memberA", Grade.VIP);
        memberService.join(member);

        Order order = orderService.createOrder(memberId,"itemA",10000);

        System.out.println("order = " + order);
    }
}
