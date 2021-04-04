import submenu from "../styles/SubMenu.module.css";
import { faBook, faTeethOpen, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function SubMenu(props) {
  return (
    <div className={submenu.container}>
      <Link href={'#speak'}>
        <div className={submenu.item}>
          <div className={submenu.icon}><FontAwesomeIcon icon={faTeethOpen} /></div>
          <div className={submenu.text}>Speaking</div>
        </div>
      </Link>
      <Link href={'#read'}>

      <div className={submenu.item}>
      <div className={submenu.icon}><FontAwesomeIcon icon={faBook} /></div>
        <div className={submenu.text}>Reading</div>
      </div>
      </Link>

      <Link href={'#listen'}>

      <div className={submenu.item}>
      <div className={submenu.icon}><FontAwesomeIcon icon={faVolumeUp} /></div>
        <div className={submenu.text}>Listening</div>
      </div>
      </Link>

    </div>
  );
}
