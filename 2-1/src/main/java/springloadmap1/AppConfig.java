package springloadmap1;

import springloadmap1.discount.FixDiscountPolicy;
import springloadmap1.member.MemberService;
import springloadmap1.member.MemberServiceImpl;
import springloadmap1.member.MemoryMemberRepository;
import springloadmap1.order.OrderService;
import springloadmap1.order.OrderServiceImpl;

public class AppConfig {

    public MemberService memberService(){
        return new MemberServiceImpl(new MemoryMemberRepository());
    }

    public OrderService orderService(){
        return new OrderServiceImpl(new MemoryMemberRepository(), new FixDiscountPolicy());
    }
}
