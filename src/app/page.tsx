import Section_five from '@/components/main_body_sections/section_five/Section_five'
import Section_four from '@/components/main_body_sections/section_four/Section_four'
import Section_one from '@/components/main_body_sections/section_one/Section_one'
import Section_seven from '@/components/main_body_sections/section_seven/Section_seven'
import Section_six from '@/components/main_body_sections/section_six/Section_six'
import Section_three from '@/components/main_body_sections/section_three/Section_three'
import Section_two from '@/components/main_body_sections/section_two/Section_two'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
     
    <Section_one/>
   <Section_two/>
    <Section_three/>
     <Section_four/>
   <Section_five/>
    <Section_six/> 
     <Section_seven/>
    
    </main>
  )
}
