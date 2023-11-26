let id = 0;
export const tableData = [
    {
        id: id++,
        col1: {icon:false,text:'Asset'},
        col2: {icon:false,text:'Pair'},
        col3: {icon: false,text:'Realized Profit'},
        col4: { icon: false, text: 'Holding Length (in Days)' },
        class: 'heading',
    },
    {
        id: id++,
        col1: {icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="#F7931A"/>
  <path d="M17.8917 10.515C18.1272 8.943 16.9294 8.09775 15.2929 7.53375L15.8239 5.40375L14.5279 5.08125L14.0104 7.155C13.6699 7.0695 13.3204 6.99 12.9717 6.9105L13.4929 4.82325L12.1969 4.5L11.6659 6.62925C11.3839 6.56475 11.1064 6.50175 10.8379 6.43425L10.8394 6.4275L9.05143 5.98125L8.70643 7.36575C8.70643 7.36575 9.66868 7.58625 9.64843 7.59975C10.1734 7.731 10.2679 8.07825 10.2522 8.35425L9.64768 10.7805C9.68368 10.7895 9.73018 10.803 9.78268 10.8232L9.64543 10.7895L8.79793 14.1885C8.73343 14.3475 8.57068 14.5867 8.20318 14.496C8.21668 14.5147 7.26118 14.2612 7.26118 14.2612L6.61768 15.7448L8.30518 16.1655C8.61868 16.2443 8.92618 16.3267 9.22843 16.404L8.69218 18.558L9.98743 18.8805L10.5184 16.7505C10.8724 16.8457 11.2159 16.9342 11.5519 17.0182L11.0224 19.1392L12.3184 19.4618L12.8547 17.3123C15.0657 17.7308 16.7277 17.562 17.4274 15.5625C17.9914 13.953 17.3997 13.0238 16.2364 12.4185C17.0839 12.2235 17.7214 11.6663 17.8917 10.515ZM14.9292 14.6685C14.5294 16.2788 11.8182 15.408 10.9392 15.1898L11.6517 12.336C12.5307 12.5557 15.3484 12.99 14.9292 14.6685ZM15.3304 10.4918C14.9652 11.9565 12.7092 11.2118 11.9779 11.0295L12.6229 8.442C13.3542 8.62425 15.7114 8.964 15.3304 10.4918Z" fill="white"/>
</svg>,text:'Bitcoin'},
        col2: {icon:false,text:'BTC/USDT'},
        col3: {icon: false,text:'40%'},
        col4: { icon: false, text: '7' },
         class: 'rol1',
    },
    {
        id: id++,
        col1: {icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="#627EEA"/>
  <path d="M12.8735 3V9.6525L18.4963 12.165L12.8735 3Z" fill="white" fillOpacity="0.602"/>
  <path d="M12.8735 3L7.25 12.165L12.8735 9.6525V3Z" fill="white"/>
  <path d="M12.8735 16.4764V20.9967L18.5 13.2124L12.8735 16.4764Z" fill="white" fillOpacity="0.602"/>
  <path d="M12.8735 20.9967V16.4757L7.25 13.2124L12.8735 20.9967Z" fill="white"/>
  <path d="M12.8735 15.4296L18.4963 12.1648L12.8735 9.65381V15.4296Z" fill="white" fillOpacity="0.2"/>
  <path d="M7.25 12.1648L12.8735 15.4296V9.65381L7.25 12.1648Z" fill="white" fillOpacity="0.602"/>
</svg>,text:'Ether'},
        col2: {icon:false,text:'ETH/USDT'},
        col3: {icon: false,text:'25%'},
        col4: { icon: false, text: '13' },
         class: 'rol2',
    },
      {
        id: id++,
        col1: {icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="#0D1E30"/>
  <g filter="url(#filter0_d_273_2692)">
    <path d="M12.2939 4.54518C12.6532 4.35993 13.0919 4.78818 12.9014 5.14143C12.7897 5.42943 12.3689 5.50593 12.1544 5.28618C11.9272 5.07618 12.0014 4.65918 12.2939 4.54443V4.54518ZM8.42765 4.95468C8.6459 4.86618 8.92265 5.06268 8.90016 5.29743C8.92265 5.55093 8.60765 5.73843 8.3849 5.61768C8.09015 5.50518 8.1239 5.03418 8.42765 4.95468ZM16.3462 5.62443C16.0049 5.58393 15.9509 5.05593 16.2787 4.94943C16.5337 4.82793 16.7677 5.05668 16.8052 5.29443C16.7512 5.49693 16.5787 5.68293 16.3462 5.62443ZM9.3074 6.57318C9.67266 6.34593 10.1932 6.68418 10.1369 7.10193C10.1182 7.52268 9.54965 7.76718 9.22865 7.48218C8.91815 7.25868 8.9654 6.74568 9.3074 6.57318ZM14.8799 6.81468C15.0427 6.40218 15.7027 6.38868 15.8879 6.79068C16.0717 7.10343 15.8459 7.49118 15.5197 7.59768C15.0869 7.67718 14.6767 7.21668 14.8799 6.81468ZM11.8282 7.57443C11.8244 7.21893 12.1529 6.95493 12.4957 6.93018C12.7237 6.97518 12.9712 7.07043 13.0687 7.29618C13.2509 7.60818 13.0889 8.03643 12.7612 8.17968C12.6112 8.26218 12.4327 8.23143 12.2692 8.22168C12.0194 8.10168 11.8087 7.86393 11.8282 7.57443ZM6.07866 8.09193C6.41241 7.88943 6.86241 8.25693 6.73566 8.61393C6.66666 8.92218 6.24516 9.04743 6.00441 8.85093C5.74716 8.66643 5.78766 8.22318 6.07941 8.09118L6.07866 8.09193ZM18.4252 8.09043C18.7079 7.87443 19.1752 8.12268 19.1407 8.47368C19.1602 8.79393 18.7559 9.03618 18.4754 8.87118C18.1664 8.73393 18.1342 8.26593 18.4252 8.09118V8.09043ZM13.4452 8.72868C13.9117 8.56368 14.4667 8.76093 14.7322 9.17118C15.0832 9.67143 14.8972 10.4334 14.3519 10.7207C13.7879 11.0604 12.9637 10.7732 12.7544 10.1522C12.5182 9.59718 12.8632 8.90268 13.4444 8.72868H13.4452ZM10.7054 8.78343C11.2229 8.54343 11.9197 8.74443 12.1694 9.26493C12.4634 9.77193 12.2362 10.4777 11.7104 10.7394C11.1839 11.0342 10.4407 10.8107 10.1864 10.2669C9.90065 9.74043 10.1542 9.02568 10.7054 8.78343ZM7.96265 9.70518C8.0024 9.37743 8.31666 9.16368 8.63391 9.14118C8.79936 9.15865 8.95399 9.23174 9.07251 9.34849C9.19104 9.46524 9.26644 9.61876 9.28641 9.78393C9.26391 10.1214 8.99915 10.4499 8.63615 10.4484C8.2364 10.4822 7.88615 10.0907 7.96265 9.70518ZM16.0642 9.21318C16.4744 8.97843 17.0437 9.31968 17.0257 9.78318C17.0534 10.2744 16.4234 10.6202 16.0154 10.3322C15.5909 10.0922 15.6239 9.41718 16.0642 9.21318ZM9.59165 10.9434C10.0702 10.8137 10.6192 11.0357 10.8539 11.4692C11.1112 11.9057 11.0062 12.5117 10.6064 12.8327C10.0927 13.3022 9.1469 13.1132 8.87391 12.4727C8.55965 11.8854 8.94141 11.0979 9.59091 10.9427L9.59165 10.9434ZM14.7869 10.9412C15.2527 10.8099 15.8002 10.9862 16.0507 11.4039C16.3822 11.8817 16.2239 12.5949 15.7312 12.9024C15.2137 13.2602 14.4142 13.0727 14.1292 12.5132C13.7842 11.9349 14.1314 11.1174 14.7869 10.9412ZM6.5069 11.4857C6.9209 11.3319 7.37991 11.7812 7.21191 12.1854C7.10991 12.5529 6.58266 12.6894 6.31041 12.4179C5.99166 12.1629 6.1094 11.5967 6.5069 11.4857ZM17.7337 12.0722C17.7259 11.9071 17.7836 11.7456 17.8943 11.6228C18.005 11.5001 18.1596 11.426 18.3247 11.4167C18.6082 11.4617 18.8842 11.6867 18.8617 11.9904C18.8879 12.3917 18.3967 12.6639 18.0487 12.4757C17.8859 12.3939 17.8027 12.2297 17.7337 12.0722ZM4.47066 11.6852C4.71966 11.5779 5.02791 11.7902 4.97091 12.0624C4.95741 12.3707 4.49465 12.4899 4.32515 12.2319C4.17515 12.0527 4.26516 11.7774 4.47066 11.6844V11.6852ZM20.1824 11.6784C20.3579 11.5562 20.6399 11.6439 20.7089 11.8457C20.8267 12.0662 20.6107 12.3677 20.3587 12.3309C20.0047 12.3624 19.8907 11.8322 20.1824 11.6784ZM10.9447 13.1582C11.6002 12.9909 12.3052 13.5287 12.3097 14.1932C12.3517 14.8644 11.6572 15.4592 10.9867 15.3047C10.4677 15.2222 10.0604 14.7302 10.0777 14.2149C10.0762 13.7214 10.4542 13.2624 10.9447 13.1582ZM13.5412 13.1574C14.2064 12.9744 14.9324 13.5219 14.9219 14.2014C14.9572 14.8599 14.2844 15.4352 13.6274 15.3039C13.0087 15.2259 12.5527 14.5577 12.7252 13.9667C12.8122 13.5737 13.1467 13.2542 13.5412 13.1567V13.1574ZM8.53415 13.5662C8.99466 13.4889 9.42665 13.9937 9.2399 14.4242C9.1034 14.8832 8.42541 15.0069 8.1254 14.6327C7.7744 14.2727 8.0369 13.6157 8.53415 13.5662ZM16.1497 13.5864C16.5607 13.4169 17.0647 13.7664 17.0332 14.2052C17.0497 14.6874 16.4272 15.0204 16.0259 14.7384C15.5707 14.4857 15.6539 13.7409 16.1497 13.5864ZM18.2782 15.6864C18.1177 15.3917 18.4094 15.0009 18.7432 15.0557C18.9082 15.0527 19.0244 15.1809 19.1302 15.2889C19.1519 15.4637 19.1887 15.6722 19.0409 15.8064C18.8407 16.0562 18.3869 15.9849 18.2782 15.6864ZM6.07715 15.1374C6.3884 14.9342 6.83615 15.2379 6.76566 15.5949C6.72816 15.9122 6.32315 16.0929 6.0569 15.9129C5.7704 15.7502 5.7809 15.2859 6.07715 15.1374ZM12.2219 15.7997C12.6292 15.6234 13.1482 15.9722 13.1092 16.4132C13.1392 16.9007 12.4979 17.2382 12.0997 16.9457C11.6572 16.6944 11.7314 15.9549 12.2219 15.7997ZM9.3764 16.4529C9.72291 16.2737 10.1879 16.5834 10.1564 16.9659C10.1669 17.2794 9.85641 17.5464 9.54141 17.4999C9.28116 17.4947 9.11165 17.2644 9.02765 17.0462C9.03216 16.8084 9.13191 16.5437 9.3764 16.4537V16.4529ZM15.1409 16.4589C15.4979 16.2414 16.0049 16.5534 15.9712 16.9614C15.9802 17.3889 15.4072 17.6619 15.0749 17.3814C14.7539 17.1617 14.7929 16.6337 15.1409 16.4589ZM16.1437 18.8964C15.9847 18.6609 16.1714 18.3767 16.4287 18.3227C16.6364 18.3639 16.8562 18.5177 16.8119 18.7532C16.7819 19.0734 16.3064 19.1709 16.1437 18.8972V18.8964ZM8.1854 18.6917C8.2484 18.5042 8.4014 18.3189 8.62565 18.3677C8.9519 18.3902 9.04866 18.8747 8.76291 19.0239C8.5064 19.1942 8.2079 18.9609 8.1854 18.6917ZM12.0254 18.9069C12.0877 18.6294 12.4514 18.4952 12.6914 18.6422C12.8504 18.7097 12.8969 18.8837 12.9374 19.0322C12.916 19.1093 12.896 19.1868 12.8774 19.2647C12.7792 19.3787 12.6524 19.4934 12.4889 19.4897C12.1852 19.5249 11.9107 19.1867 12.0247 18.9069H12.0254Z" fill="black"/>
  </g>
  <path d="M12.2939 4.54518C12.6532 4.35993 13.0919 4.78818 12.9014 5.14143C12.7897 5.42943 12.3689 5.50593 12.1544 5.28618C11.9272 5.07618 12.0014 4.65918 12.2939 4.54443V4.54518ZM8.42765 4.95468C8.6459 4.86618 8.92265 5.06268 8.90016 5.29743C8.92265 5.55093 8.60765 5.73843 8.3849 5.61768C8.09015 5.50518 8.1239 5.03418 8.42765 4.95468ZM16.3462 5.62443C16.0049 5.58393 15.9509 5.05593 16.2787 4.94943C16.5337 4.82793 16.7677 5.05668 16.8052 5.29443C16.7512 5.49693 16.5787 5.68293 16.3462 5.62443ZM9.3074 6.57318C9.67266 6.34593 10.1932 6.68418 10.1369 7.10193C10.1182 7.52268 9.54965 7.76718 9.22865 7.48218C8.91815 7.25868 8.9654 6.74568 9.3074 6.57318ZM14.8799 6.81468C15.0427 6.40218 15.7027 6.38868 15.8879 6.79068C16.0717 7.10343 15.8459 7.49118 15.5197 7.59768C15.0869 7.67718 14.6767 7.21668 14.8799 6.81468ZM11.8282 7.57443C11.8244 7.21893 12.1529 6.95493 12.4957 6.93018C12.7237 6.97518 12.9712 7.07043 13.0687 7.29618C13.2509 7.60818 13.0889 8.03643 12.7612 8.17968C12.6112 8.26218 12.4327 8.23143 12.2692 8.22168C12.0194 8.10168 11.8087 7.86393 11.8282 7.57443ZM6.07866 8.09193C6.41241 7.88943 6.86241 8.25693 6.73566 8.61393C6.66666 8.92218 6.24516 9.04743 6.00441 8.85093C5.74716 8.66643 5.78766 8.22318 6.07941 8.09118L6.07866 8.09193ZM18.4252 8.09043C18.7079 7.87443 19.1752 8.12268 19.1407 8.47368C19.1602 8.79393 18.7559 9.03618 18.4754 8.87118C18.1664 8.73393 18.1342 8.26593 18.4252 8.09118V8.09043ZM13.4452 8.72868C13.9117 8.56368 14.4667 8.76093 14.7322 9.17118C15.0832 9.67143 14.8972 10.4334 14.3519 10.7207C13.7879 11.0604 12.9637 10.7732 12.7544 10.1522C12.5182 9.59718 12.8632 8.90268 13.4444 8.72868H13.4452ZM10.7054 8.78343C11.2229 8.54343 11.9197 8.74443 12.1694 9.26493C12.4634 9.77193 12.2362 10.4777 11.7104 10.7394C11.1839 11.0342 10.4407 10.8107 10.1864 10.2669C9.90065 9.74043 10.1542 9.02568 10.7054 8.78343ZM7.96265 9.70518C8.0024 9.37743 8.31666 9.16368 8.63391 9.14118C8.79936 9.15865 8.95399 9.23174 9.07251 9.34849C9.19104 9.46524 9.26644 9.61876 9.28641 9.78393C9.26391 10.1214 8.99915 10.4499 8.63615 10.4484C8.2364 10.4822 7.88615 10.0907 7.96265 9.70518ZM16.0642 9.21318C16.4744 8.97843 17.0437 9.31968 17.0257 9.78318C17.0534 10.2744 16.4234 10.6202 16.0154 10.3322C15.5909 10.0922 15.6239 9.41718 16.0642 9.21318ZM9.59165 10.9434C10.0702 10.8137 10.6192 11.0357 10.8539 11.4692C11.1112 11.9057 11.0062 12.5117 10.6064 12.8327C10.0927 13.3022 9.1469 13.1132 8.87391 12.4727C8.55965 11.8854 8.94141 11.0979 9.59091 10.9427L9.59165 10.9434ZM14.7869 10.9412C15.2527 10.8099 15.8002 10.9862 16.0507 11.4039C16.3822 11.8817 16.2239 12.5949 15.7312 12.9024C15.2137 13.2602 14.4142 13.0727 14.1292 12.5132C13.7842 11.9349 14.1314 11.1174 14.7869 10.9412ZM6.5069 11.4857C6.9209 11.3319 7.37991 11.7812 7.21191 12.1854C7.10991 12.5529 6.58266 12.6894 6.31041 12.4179C5.99166 12.1629 6.1094 11.5967 6.5069 11.4857ZM17.7337 12.0722C17.7259 11.9071 17.7836 11.7456 17.8943 11.6228C18.005 11.5001 18.1596 11.426 18.3247 11.4167C18.6082 11.4617 18.8842 11.6867 18.8617 11.9904C18.8879 12.3917 18.3967 12.6639 18.0487 12.4757C17.8859 12.3939 17.8027 12.2297 17.7337 12.0722ZM4.47066 11.6852C4.71966 11.5779 5.02791 11.7902 4.97091 12.0624C4.95741 12.3707 4.49465 12.4899 4.32515 12.2319C4.17515 12.0527 4.26516 11.7774 4.47066 11.6844V11.6852ZM20.1824 11.6784C20.3579 11.5562 20.6399 11.6439 20.7089 11.8457C20.8267 12.0662 20.6107 12.3677 20.3587 12.3309C20.0047 12.3624 19.8907 11.8322 20.1824 11.6784ZM10.9447 13.1582C11.6002 12.9909 12.3052 13.5287 12.3097 14.1932C12.3517 14.8644 11.6572 15.4592 10.9867 15.3047C10.4677 15.2222 10.0604 14.7302 10.0777 14.2149C10.0762 13.7214 10.4542 13.2624 10.9447 13.1582ZM13.5412 13.1574C14.2064 12.9744 14.9324 13.5219 14.9219 14.2014C14.9572 14.8599 14.2844 15.4352 13.6274 15.3039C13.0087 15.2259 12.5527 14.5577 12.7252 13.9667C12.8122 13.5737 13.1467 13.2542 13.5412 13.1567V13.1574ZM8.53415 13.5662C8.99466 13.4889 9.42665 13.9937 9.2399 14.4242C9.1034 14.8832 8.42541 15.0069 8.1254 14.6327C7.7744 14.2727 8.0369 13.6157 8.53415 13.5662ZM16.1497 13.5864C16.5607 13.4169 17.0647 13.7664 17.0332 14.2052C17.0497 14.6874 16.4272 15.0204 16.0259 14.7384C15.5707 14.4857 15.6539 13.7409 16.1497 13.5864ZM18.2782 15.6864C18.1177 15.3917 18.4094 15.0009 18.7432 15.0557C18.9082 15.0527 19.0244 15.1809 19.1302 15.2889C19.1519 15.4637 19.1887 15.6722 19.0409 15.8064C18.8407 16.0562 18.3869 15.9849 18.2782 15.6864ZM6.07715 15.1374C6.3884 14.9342 6.83615 15.2379 6.76566 15.5949C6.72816 15.9122 6.32315 16.0929 6.0569 15.9129C5.7704 15.7502 5.7809 15.2859 6.07715 15.1374ZM12.2219 15.7997C12.6292 15.6234 13.1482 15.9722 13.1092 16.4132C13.1392 16.9007 12.4979 17.2382 12.0997 16.9457C11.6572 16.6944 11.7314 15.9549 12.2219 15.7997ZM9.3764 16.4529C9.72291 16.2737 10.1879 16.5834 10.1564 16.9659C10.1669 17.2794 9.85641 17.5464 9.54141 17.4999C9.28116 17.4947 9.11165 17.2644 9.02765 17.0462C9.03216 16.8084 9.13191 16.5437 9.3764 16.4537V16.4529ZM15.1409 16.4589C15.4979 16.2414 16.0049 16.5534 15.9712 16.9614C15.9802 17.3889 15.4072 17.6619 15.0749 17.3814C14.7539 17.1617 14.7929 16.6337 15.1409 16.4589ZM16.1437 18.8964C15.9847 18.6609 16.1714 18.3767 16.4287 18.3227C16.6364 18.3639 16.8562 18.5177 16.8119 18.7532C16.7819 19.0734 16.3064 19.1709 16.1437 18.8972V18.8964ZM8.1854 18.6917C8.2484 18.5042 8.4014 18.3189 8.62565 18.3677C8.9519 18.3902 9.04866 18.8747 8.76291 19.0239C8.5064 19.1942 8.2079 18.9609 8.1854 18.6917ZM12.0254 18.9069C12.0877 18.6294 12.4514 18.4952 12.6914 18.6422C12.8504 18.7097 12.8969 18.8837 12.9374 19.0322C12.916 19.1093 12.896 19.1868 12.8774 19.2647C12.7792 19.3787 12.6524 19.4934 12.4889 19.4897C12.1852 19.5249 11.9107 19.1867 12.0247 18.9069H12.0254Z" fill="white"/>
  <defs>
    <filter id="filter0_d_273_2692" x="0.942988" y="2.84674" width="23.1062" height="21.6067" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1.65375"/>
      <feGaussianBlur stdDeviation="1.65375"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_2692"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_2692" result="shape"/>
    </filter>
  </defs>
</svg>,text:'Cardano'},
        col2: {icon:false,text:'ADA/USDT'},
        col3: {icon: false,text:'20%'},
          col4: { icon: false, text: '4' },
         class: 'rol3',
    },
    
] 