import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Head from '../Components/head';
import img1 from './assests/images/img1.jpg';
import { pageStyles } from '../Components/styles.js'
// import {makeStyles} from '@mui/styles';

// const pageStyles = makeStyles({
//   p_cont:{
//       display: 'flex',
//       width: '100vw',
//       marginLeft: 'auto',
//       marginRight: 'auto'
//   },
//   p_nav:{
//       width: '25vw',
//       height: '100vh',
//       position: 'fixed',
//       backgroundColor: 'rgb(137, 227, 255)'
//   },
//   contentBody:{
//       width: '70vw',
//       marginLeft: 'auto',
//       marginRight: '25px',
//       overflow: 'hidden',
//       marginTop: '33vh'
//   },
//   menu:{
//     marginTop: '40vh',
//     textAlign: 'right',
//     listStyle: 'none',
//     marginRight: '15px',
//     height: 'fit-content',
//     "& li":{
//         marginTop: 'auto',
//         marginBottom: 20,
//         "& a":{
//             fontFamily: 'Roboto-Regular',
//             fontSize: '12pt',
//             color: 'rgb(0, 0, 0)',
//             width: 'fit-content',
//             margin: 8,
//             textDecoration: 'none',
//             "&:hover":{
//                 fontFamily: 'Roboto-Medium'
//             }
//         }
//     }
//   },
//   active:{
//       fontFamily: 'Roboto-Medium'
//   },
//   p:{
//       textAlign: 'justify',
//       fontFamily: 'Roboto-Light',
//       fontSize: '10pt'
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100vw',
//     marginTop: 'auto',
//     marginBottom: 'auto',
//     marginRight: 0,
//     paddingTop: '1vh',
//     color: 'rgb(0, 0, 0)'
//   }
// })


export default function Aboutcontent() {
  
  let styles = pageStyles();

  return (   
    <div>
      <div style={{backgroundImage:`url(${img1})`, backgroundRepeat:'no-repeat',backgroundSize:'cover', zIndex:'5', position: 'absolute', margin: '0'}}>
        <Head/>
      </div> 
      <div className={styles.p_cont}>
        <Router>
          <div className={styles.p_nav}>
            <ul className={styles.menu}>
                <li>
                  <Link to="/About/Overview">Overview</Link>
                </li>
                <li id='nav'>
                  <Link to="/About/History" id='nav'>History</Link>
                </li>
                <li>
                  <Link to="/About/Founders">Founders</Link>
                </li>
                <li>
                  <Link to="/About/Traditions">Traditions</Link>
                </li>
                <li>
                  <Link to="/About/Past Principals">Past Principals</Link>
                </li>
            </ul>
          </div>

          <div className={styles.contentBody}>
            <Switch>
              <Route path="/About/Overview" >
                <About />
              </Route>
              <Route path="/About/History">
                <History />
              </Route>
              <Route path="/About/Founders">
                <Founders />
              </Route>
              <Route path="/About/Traditions">
                <Traditions />
              </Route>
              <Route path="/About/Past Principals">
                <PastPrincipals />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
    
  );
}


function History() {
  return (
    <div id='history'>
      <h2>History</h2>
      <p>
Wesleyan missionary Rev. George Baugh was the founder of Richmond College , which began its existence on 1st May, 1876 Rev. Samuel Langdon was its first principal. The School was started with a staff of 8 and with 104 pupils on the roll.<br></br><br></br>

Latin, Mathematics, Science, Arts and Religion were included in the curriculum, and children were trained to sit for British Public examinations. A prize giving was held in its very first year, and a library with 500 books was opened in 1878.
<br></br><br></br>
From these facts, it is evident that from the beginning, Richmond was conducted as a comprehensive educational Institution. The school which originally bore the name ” Galle High School “, was renamed Richmond College ” in 1882.
The first College magazine was published in 1887. It was only the second occasion that a school in Ceylon had produced a magazine. The same year, the English Literary Union was formed and cricket was started in the school. In 1894, under the principal ship of Rev. Hartley, the Old Boys’ Association was formed. Another important occurrence during that year was the establishment of the College Cadet Corps.
Rev. James Horne Darrel assumed duties as principal in 1896. Under his brilliant leadership, the school experienced both physical expansion as well as qualitative growth. During his period, Richmond rose to be recognized as one of the best schools in the island. At the local Cambridge Examinations of 1905, Richmond earned top position among assisted schools and second place among all schools in Ceylon . The same year, the Richmond – Mahinda Match was played for the first time, with the two principals, Rev. Darrell of Richmond and Mr. F. L. Woodward of Mahinda, officiating as umpires.
<br></br><br></br>
Rev. W. J. T. Small who became principal following the death of Rev. Darrell, continued the good work begun by his predecessor.
<br></br><br></br>
Commerce was introduced as a subject in 1912. This was also the year in which Football was started at Richmond . In 1915, the 2nd Galle ( Richmond ) Scouts Group was established. Scouting at Richmond enjoyed remarkable success from the beginning. The first two King’s Scouts in the island were produced by Richmond . In 1916, Ceylon ‘s first Cub Pack was started at Richmond .
<br></br><br></br>
A notable event during Rev. Small’s period was the formation of the National Association at Richmond in 1915. It was in effect a forum within the school for the emerging nationalist movement. It is perhaps the best example of the liberality of the thinking of Rev. Small.
<br></br><br></br>
In 1922, Rev. Alec Sneath took over the principalship of Richmond College . He was responsible for many measures which brought refinement and qualitative development to the school.
<br></br><br></br>
In 1926, a well equipped library was established in a new building. The Science Society was started the same year. In 1931, the Sinhala Literary Union came into being.
<br></br><br></br>
In 1940, the last of the missionary principals left, leaving the school in the hands of local graduates.
<br></br><br></br>
Mr. E. R. de Silva, an old boy of the school, had the distinction of becoming the first Ceylonese principal of Richmond . This was a period which saw major changes in the educational structure of Ceylon . The Free Education Scheme which was devised by Mr. C. W. W. Kannangara, an illustrious old boy of Richmond , was being implemented, and the school had to be geared to suit the changes. Mr. A. S. Weerasinghe succeeded him and carried on the same traditions.
<br></br><br></br>
In 1962, Richmond College , which was owned by the Methodist Mission, was nationalized. Mr. D. G. Welikala, the first head of Richmond under state management, was also its first Buddhist principal. With the take over, the Methodist Vernacular School on Richmond Hill was amalgamated with Richmond.
<br></br><br></br>
During this period, considerable expansion and change had to take place to cater to the new situation. Richmond faced the challenge of transition so successfully that the then Minister of Education commended Richmond on several occasions, describing it as a model institution among nationalized schools.
<br></br><br></br>
Richmond was one of the first schools in the island to start the teaching of Agriculture as a subject. In 1969, she became the first school in the country to start an Agricultural stream for the Advanced Level.
<br></br><br></br>
In 1976, Richmond celebrated her centenary. In terms of the provisions of the White Paper on Education, Richmond was named as a National School in 1986.
<br></br><br></br>
A remarkable fact concerning Richmond is that out of the 8 Sri Lankans to head the school so far, not less than 5 have been old Richmondites. They are Mr. E. R. de Silva, Mr. Shelton Wirasinghe, Mr. S. Kariyawasam, Mr. B. Suriarachchi, and Mr. S. Ilayperuma.
<br></br><br></br>
The School presently has 4326 students and a staff of 178. During the past 129 years, Richmondites have made a sterling contribution to the nation in various professional and academic spheres. But the pride of Richmond has always been its discipline. A Richmondite who learns the value of discipline in school, takes this to society, thereby becoming an exemplary citizen, irrespective of the social class he belongs to.
<br></br><br></br>
The school is founded, 1876 (Extracted from Richmond Magazine 1951)
Among the most important business transacted at the meeting of the Missionaries of South Ceylon in the early months of 1876 in Colombo, was the recent development of the work in Galle. Owing to zealous and preserving applications of Mr. Baugh the authorities in England had decided on the establishment of a Superior School for Boys at Galle under the charge of Missionary and had made a liberal grant for erection of buildings at Richmond Hill. This District Meeting of Missionaries voted their thanks to the Committee for the generous aid and their congratulations to Mr.Baugh on the success of his plans.
The meeting also appointed the Rev.Samuel Langdon Principal of the new school.
Work in connection with the new school in Galle now progressed with feverish haste. There existed already on Richmond Hill the Boys Anglo Vernacular School. An additional building was erected where the main block of class rooms built by Mr.Darrel now stands. A new bungalow close to the rooms of the Theological students was built for Mr Langdon. Mr Baugh continued to occupy what has been since the time of Mr.Darrel The Principals bungalow.
Furniture was hurriedly procured, and a syllabus drawn up . When this was over the following advertisement appeared in the local papers.
GALLE HIGH SCHOOL – This school will be opened on RIchmond Hill on Monday 1st May. All those who intend to become pupils are requested to do so with as little delay as possible , so that the classes might be arranged. Boarding accommodation available for few. Sgnd. S. Langdon.
<br></br><br></br>
Mr & Mrs Langdon arrived on the Hill on 6th of April 1876. They did their journey by coach, there being no railway. Towards the end of the month Mr.Langdon held a meeting in the Fort Church, where he explained the need for this new school. He told his audience that it was in no way meant to rival the Galle Central School- Late named All Saints College.
The new Galle High School was established on the 1st May 1876 with 104 pupils. Mr Baugh expressed his joy in these words. May 6, 1876  It is with unfeigned gratitude to God that I am now able to record the establishment of two superior schools so long needed for this neighbourhood, viz., The Galle High School for boys & the Whitfield Road School for Girls.* Ever since my first practical acquaintance with this circuit in 1864 now more than 12 years ago, I made it my one great work next to preaching the Gospel to prevail upon our authorities to enable us to secure them and it is a matter of much gratification that persistent effort has resulted in success…. I heartily thank the gentlemen of our Foreign Missionary Committee in London and the good ladies of our important Ladies  Auxiliary for female education for both the needed schools.
Six months later Mr Baugh was transferred to Calcutta on promotion. He left Ceylon in the early months of 1877, having however had the joy of being present at Richmond first Prize Giving in December 1876, and at the laying of the foundation for the new Chapel at foot of the Hill.
Great credit is due to Mr Baugh for his noble persistence of effort. He well deserves to be called the Founder of Richmond.
<br></br><br></br>
          * Girls boarding school now called Rippon</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Founders() {
  return (
    <div>
      <h2>Founders</h2>
    </div>
  );
}

function Traditions() {
  return (
    <div>
      <h2>Traditions</h2>
    </div>
  );
}

function PastPrincipals() {
  return (
    <div>
      <h2>Past Principals</h2>
    </div>
  );
}
