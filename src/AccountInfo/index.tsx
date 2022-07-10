import { UserInfo } from "@web3auth/base";
import { useEffect, useMemo, useState } from "react";

interface IAccountInfo {
    userInfo?: Partial<UserInfo>
}

const AccountInfo = (props: IAccountInfo) => {
    const { userInfo = {} } = props;
    const name = useMemo(() => {
        const verifier_key = userInfo?.aggregateVerifier?.split('-').reverse()[0] || '';
        return verifier_key;
    }, [userInfo?.aggregateVerifier])
    return <div>
        <span>
            {name && <p>{name}</p>}
            {userInfo?.profileImage && (
                <img src={userInfo.profileImage} />
            )}
            {userInfo?.name && (
                <p>{userInfo.name}</p>
            )}
        </span>
    </div>
}

export default AccountInfo;
