import {motion} from 'framer-motion';
import {Flag, GraduationCap, Car} from 'lucide-react';

export default function App(){
 return <main className="app">
  <div className="lights"/>
  <motion.div initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} className="card">
   <Flag size={40}/><h1>LOGARACING</h1><h2>TANTANGAN LOGARITMA</h2>
   <p>Game edukasi matematika SMA bertema balap F1.</p>
   <button> <GraduationCap/> MASUK SEBAGAI GURU</button>
   <button> <Car/> MASUK SEBAGAI SISWA</button>
  </motion.div>
 </main>
}