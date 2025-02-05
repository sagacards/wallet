import React, { useEffect, useRef, useState } from 'react';
import { keyable } from '~scripts/Background/types/IMainController';
import styles from './index.scss';
import SMALL_DOWN from '~assets/images/small_down.svg';
import SMALL_UP from '~assets/images/small_up.svg';
import { useSelector } from 'react-redux';
import { selectActiveAccountsByGroupId } from '~state/wallet';
import { useHistory } from 'react-router-dom';
import { getSymbol } from '~utils/common';
import useOutsideClick from '~hooks/useOutsideClick';
import clsx from 'clsx';

interface Props {
  selectedAccount: keyable;
}

const AccountSelector = ({ selectedAccount }: Props): React.ReactElement<Props> => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);
  const accounts = useSelector(selectActiveAccountsByGroupId(selectedAccount?.groupId));
  const history = useHistory();

  const [selectedAccountText, setSelectedAccountText] = useState<string>();
  const _onChangePrefix = (account: keyable) => {
    setSelectedAccountText(account.address);
    //setSelectedAccount(account);
    setShowDropDown(false);
    history.push('/account/details/' + account.address);
  };

  useOutsideClick(dropDownRef, (): void => {
    showDropDown && setShowDropDown(!showDropDown);
  });

  useEffect(() => {
    setSelectedAccountText(selectedAccount?.address);
  }, [selectedAccount]);

  return <div className={styles.page}
    ref={dropDownRef}
  >
    {selectedAccountText && <div className={styles.selectedAccountDiv}>
      <div className={styles.selectedAccount}
        onClick={() => setShowDropDown((status) => !status)}>
        <img src={getSymbol(selectedAccount.symbol)?.icon} className={styles.networkIcon} />
        {getSymbol(selectedAccount.symbol)?.name}
        <img
          className={styles.dropDownIcon}
          color='#F4F5F8'
          src={showDropDown ? SMALL_DOWN : SMALL_UP}
        />
      </div>
    </div>}
    {showDropDown && <div className={styles.addressSelector}>
      {
        accounts.map((account: keyable) => {
          return (<div
            className={clsx(styles.addressItem, account.id === selectedAccount.id && styles.addressItem_selected)}
            key={account.address}
            onClick={() => _onChangePrefix(account)}>
            <img src={getSymbol(account.symbol)?.icon} className={styles.networkIcon} />
            <div className={styles.networkName}>{getSymbol(account.symbol)?.name}</div>
          </div>);
        })
      }
      <div
        onClick={() => history.push('/account/addnetwork/' + selectedAccount.groupId)}
        className={styles.addNetworkBtn}>+ Add Network</div>
    </div>}

  </div>;
};

export default AccountSelector;
