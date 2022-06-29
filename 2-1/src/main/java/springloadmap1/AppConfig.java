package springloadmap1;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springloadmap1.discount.DiscountPolicy;
import springloadmap1.discount.FixDiscountPolicy;
import springloadmap1.discount.RateDiscountPolicy;
import springloadmap1.member.MemberService;
import springloadmap1.member.MemberServiceImpl;
import springloadmap1.member.MemoryMemberRepository;
import springloadmap1.order.OrderService;
import springloadmap1.order.OrderServiceImpl;

@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService(){
        return new MemberServiceImpl(memberRepository());
    }

    @Bean
    public MemoryMemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService(){
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }

    @Bean
    public DiscountPolicy discountPolicy(){
        //return new FixDiscountPolicy();
        return new RateDiscountPolicy();
    }
}
