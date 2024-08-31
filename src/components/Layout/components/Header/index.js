import React, { useEffect, useState } from 'react'; // Import the useState function from the react package
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok'></img>
                </div>
                <div>
                    <Tippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')} >
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />

                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                className={cx('search-input')}
                                placeholder='Search accounts and videos'
                                spellCheck='false'
                            />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loadding')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />

                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary rightIcon={  <FontAwesomeIcon icon={faMagnifyingGlass} />}>Log in</Button>
                </div>
            </div>
        </header>
    );

}

export default Header;