import Hero from "@/components/hero";
import performanceImg from "Public/performance.jpg"

export default function PerformancePage(){
    return(
        <Hero imgAlt="Blazing" imgData={performanceImg} title="Blazing fast Performance"/>
    )
}