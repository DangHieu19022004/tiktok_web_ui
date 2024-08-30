import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a291e5317692c79af59e70ef8adb0648.jpeg?lk3s=a5d48078&nonce=5612&refresh_token=8b576711e8ed7a89546447ac805ab441&x-expires=1725188400&x-signature=JpsbEJOZNNQ9tTgION9Z1%2Fl6RcY%3D&shp=a5d48078&shcp=81f88b70'
                alt="Hoa"
            >
            </img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa Nguyen</span>
                    <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@hoanguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;