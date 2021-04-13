<template>
  <div>
    <div class="message_wrapper">
            <div class="pop_wrapper">
    <div class="login">
      <div class="loginLR" v-if="!userAgree">
        <div class="loginIcon">
          <img src="./../assets//images/login/loginLeft.png" alt="" />
        </div>
        <div class="loginInfomation">
          <div class="close" @click="close">
            <img src="./../assets/images/login/colse.png" alt="">
          </div>
          <div class="phone">
            <div class="loginTiltle">
              <p>手机号</p>
              <input type="text" placeholder="请输入手机号" @input="phoneNum($event)" :class="err?'errPhone':''" />
            </div>
          </div>
          <div class="phoneCode" :class="err?'phoneCodeErr':''">
            <p>验证码</p>
            <div class="code">
              <input type="text" placeholder="请输入验证码" @input="searchCode($event)"/>
              <span>|</span>
              <button @click="sendCode" :disabled="codeBtnStatus" :class="miao?'miao':''">{{codeBtn}}</button>
            </div>
          </div>
          <div class="errer">
            <p>{{errText}}</p>
          </div>
          <div class="Select">
            <img :src="select?yesBtn:noBtn" alt="" @click="me" />
            <span @click="agrees">登录既代表同意<a>用户协议和隐私政策</a></span>
          </div>
          <div class="btn" >
            <button  :class="dataFrom?'btnNO':'btnYes'" v-bind:disabled="dataFrom" @click="login">登&nbsp;&nbsp;录</button>
          </div>
        </div>
      </div>
      <div class="llw" v-if="userAgree">
    <div class="white_background">
    <div class="close" @click="closeAgree">
      <img src="./../assets/images/login/colse.png" alt="">
    </div>
    <div style="width: 94%; margin: 0 auto; line-height: 30px;">
    <p class="tite">优谷活动帮平台服务协议和隐私政策</p>
    <p class="text">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 欢迎您访问优谷活动帮平台，与广州优谷信息技术有限公司签署《优谷活动帮平台服务协议》（下称“本协议”）并使用优谷活动帮平台服务。<br/>
      <span class="bold">【重要提示】</span> <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您在注册、使用优谷活动帮平台提供的各项服务之前，<span class="bold">请您仔细阅读、理解《优谷活动帮平台服务协议》（简称“本协议”），特别是以黑体加粗、下划线标识等其他合理方式提示您注意的可能与您利益有重大关系的条款，包括但不限于相关免除责任的条款、对权利进行限制的条款、法律适用和争议解决条款等。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">如果您不同意本协议的任意或全部条款，尤其是前述条款，请立即停止注册流程。一旦您通过网络页面点击确认或事实上使用优谷提供的任意一项服务，均视为您已阅读、理解并同意签署本协议，并自愿接受并遵守本协议的全部约定。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">如对本协议内容有任何疑问、意见或建议，您可通过客服电话（020-37346335）与我们联系。</span><br/>
      
      <span class="bold">第一条 通则</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1<span class="bold">用户：</span>指注册、登录、使用本协议约定服务的个人或组织，在本协议中更多地称为“您”。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2<span class="bold">优谷活动帮平台服务</span>：指优谷基于互联网，通过优谷活动帮平台（以下简称“平台”）网站、微信小程序等提供的各项服务（具体以平台实际提供的为准），您可以根据自己的需求选择使用一项或多项具体服务并遵守其服务规则（以下或简称“本服务”）。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.3<span class="bold">服务规则：</span>指优谷活动帮平台已经发布及后续发布的全部规则、解读、公告等内容以及帮助中心内发布的各类规则、实施细则、产品流程说明、公告等。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4<span class="bold">【主体信息】</span>优谷活动帮平台是服务提供者，依约向您提供各类技术产品或服务。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.5<span class="bold">【主体转让】</span>优谷活动帮平台可将本协议部分或全部权利义务转让予第三方，但平台须提前90天书面通知您。为本款生效之需要，双方同意签订所有合理必要的文件及采取合理必要的措施。<br/>
      
      <span class="bold">第二条 账号注册和使用</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1<span class="bold">【注册资格】</span>您应当具备中华人民共和国法律规定的必要、适当的民事权利能力和民事行为能力，按照平台的要求完成注册、获得优谷活动帮平台账号（以下简称“账号”）。<span class="bold">若您不具备前述与您行为相适应的民事权利能力和民事行为能力，则您需要在您监护人的陪同下完成注册，并且您与您的监护人应依照法律规定承担因此而导致的一切后果。</span><br/>
      为保护账号的安全性和独立性，避免出现账号归属不清晰等不良后果，<span class="bold">您应当使用您享有合法权益的手机号码完成注册。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2 <span class="bold">【资料填写】</span>您应当按照平台的要求填写、提交真实、合法、有效的资料（统称“客户资料”），包括但不限于联系人姓名、电子邮箱、联系电话、联系地址等。<span class="bold">您理解并同意，您有义务及时更新，保持您提供信息的真实性及有效性。因您未及时更新因此产生的一切后果，平台不承担任何责任。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.3<span class="bold">【账号信息承诺】您在设置账号及相关功能的名称、头像等信息时，不得侵犯他人商标权、著作权，亦不得违反公序良俗及法律法规要求。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.4<span class="bold">【账号行为责任自负】账号将作为您使用优谷活动帮平台服务的身份识别依据，您应当对用户名、密码等信息采取必要、有效的保密和安全保护措施（包括但不限于：保管使用权限、设置高强度密码和定期更换措施等），否则，导致的后果由您自行承担。此外，您应为账号下的行为负责，所有账号下的操作行为均被视为您实施，且应由您承担全部法律后果。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.5<span class="bold">【账号授权】您需规范对账号的使用与管理。若您基于自身经营需要等原因，将账号授权您的员工或他人管理的，须做好权限管控，并且在遇到人员变动时及时完成交接和账号安全保护（例如修改密码、变更登录方式、设置账号保护等）。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.6 <span class="bold">【真实身份信息认证】</span>为使您更好地使用平台的各项服务，保障您的账户安全，您应依照国家法律法规、服务规则完成真实身份信息认证。<span class="bold">您同意授权平台使用第三方核实您提交的相关信息或资料。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.7<span class="bold">【账号变更】</span>您账号的所有权归优谷活动帮平台，使用权归您。若您需变更账户注册信息，您应向平台提交符合要求的书面承诺函并提交相关资料，经平台审核同意后方可变更。<span class="bold">您保证因承诺函及提交的资料虚假、无效和不准确所导致的法律风险并由此给平台所造成的一切损失均由您自行承担。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8<span class="bold">【账号归属认定】真实身份信息认证是对账号归属以及责任承担等进行判断的依据，在账号出现纠纷时，平台有权认定该账号归属于真实身份信息认证主体，由其承担相应法律责任。对于归属存在争议的账号，平台有权暂时对该账号进行冻结。您在进行认证时务必谨慎对待，给与足够的重视并确保认证主体与账号使用主体保持一致，避免将企业使用的账号认证在个人名下，或将本人使用的账号认证在他人名下等任何不当认证行为。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.9<span class="bold">【提交资料须知】</span>若您发现有他人盗用您的账号及密码、或任何其他未经您合法授权的情形时，您应立即以有效方式通知平台并提供必要资料（如客户资料、情况说明、证明材料及诉求等，以便优谷活动帮平台核实身份及事件）。平台收到您的有效通知并核实身份后，会依据法律法规及服务规则进行处理。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">若您提供的资料存在瑕疵，导致平台无法核实您的身份或无法判断您的需求等，而导致平台未能及时处理，给您带来的损失，应由您自行承担。同时，您理解平台对您的任何请求采取行动均需要合理时间，且平台应您请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大，除平台存在法定过错外，平台不承担责任。</span><br/>
      
      <span class="bold">第三条 服务购买</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1<span class="bold">【服务在线购买】</span>您可通过平台网站或微信小程序在线选购所需服务，购买前您需仔细阅读所购服务对应的服务规则，并根据自身需求决定是否购买或使用。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2<span class="bold">【服务协议的补充】</span>部分优谷活动帮平台服务的开通可能需要双方另行签订单独的服务协议，单独的服务协议可能以电子文档形式展示，也可能是独立的纸质文档形式展示，您可以根据自身情况决定是否接受服务协议及开通服务。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3<span class="bold">【优惠措施说明】</span>优谷活动帮平台可能因业务运营、产品推广等各种原因，在特定时期内推出各项优惠措施（以下统称“优惠措施”），<span class="bold">您理解并同意，这些优惠措施可能是暂时性、阶段性或有数量限制的，也可能仅适用于满足特定条件的客户，您需要按照相应的规则购买、使用相应服务。除非另有书面明确说明，优惠措施不可同时叠加适用。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4<span class="bold">【服务开通】</span>为保证服务及时开通或持续提供，您应当遵守本协议及您使用的服务规则并及时缴纳费用。<span class="bold">具体费用以交易进行时，您进入平台官网相关交互界面时载明的费用为准。</span>部分服务可能有时间限制、库存限制或者活动数量等限制，订单提交后，若发生您未及时付款、或付款期间出现数量不足或已达到限量等情况的，您将可能无法使用相关服务。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5<span class="bold">【付款方式】</span>您可以通过账号直接使用微信或支付宝的形式付费，也可以通过对公银行转账方式向平台支付费用（为保证服务的持续性，若您选择对公银行转账支付费用的，应预留合理时间以便平台核实到账情况并开通服务。具体支付方式以平台提供的为准。）<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6<span class="bold">【服务费用调整】平台可能根据实际需要对收费服务的收费标准、方式进行修改和变更，平台也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，平台会采取合理途径并以足够合理的期限提前通过站内消息、网页公告等方式通知您，确保您有充分选择的权利。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.7<span class="bold">【逾期付费的责任】</span>您应当按照服务规则及时、足额支付费用。若您未及时、足额支付费用的，平台有权拒绝开通服务或无需另行通知而中止、终止服务，同时可以采取以下一项或多项措施：<br/>
      <span class="bold">（1）要求您除应依约支付应付费用外，每逾期一天，还应按所欠费用1‰的标准向平台支付违约金，直至缴清全部费用为止。</span><br/>
      <span class="bold">（2）若您逾期付款超过15天，平台有权无需另行通知您即可随时采取包括但不限于提前单方解除协议的措施。</span><br/>
      <span class="bold">（3）若您逾期付款，平台有权无需另行通知您，而直接将预付费用和账户余额（如有）用于抵扣拖欠款项和违约金。</span><br/>
      
      <span class="bold">第四条 用户行为规范<br/>
      4.1【禁止性行为（一）】您在使用优谷活动帮平台的服务时须遵守相关法律法规及服务规则，并确保拥有法律法规要求的经营资质和能力，不得实施包括但不限于以下行为，也不得为任何违反法律法规的行为提供便利：<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）反对宪法所确定的基本原则的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）损害国家荣誉和利益的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）歪曲、丑化、亵渎、否定英雄烈士事迹和精神，以侮辱、诽谤或者其他方式侵害英雄烈士的姓名、肖像、名誉、荣誉的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）宣扬恐怖主义、极端主义或者煽动实施恐怖活动、极端主义活动的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）煽动民族仇恨、民族歧视，破坏民族团结的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（7）破坏国家宗教政策，宣扬邪教和封建迷信的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（8）散布谣言，扰乱经济秩序和社会秩序的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（9）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（10）侮辱或者诽谤他人，侵害他人名誉、隐私和其他合法权益的；<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（11）中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其他内容。<br/>
      4.2【禁止性行为（二）】您在使用优谷活动帮平台的服务时须维护互联网秩序和安全，不得侵犯任何主体的合法权益，不得实施包括但不限于以下行为，也不得为其提供便利：<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）实施诈欺、虚伪不实或误导行为，或实施侵害他人知识产权等任何合法权益的行为。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）发布、传播包含危害国家秩序和安全、封建迷信、淫秽、色情、低俗等违法违规信息。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）实施任何破坏或试图破坏网络安全的行为，包括但不限于以病毒、木马、恶意代码、钓鱼等方式，对网站、服务器进行恶意扫描、非法侵入系统、非法获取数据等。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）实施任何改变或试图改变优谷活动帮平台提供的系统配置或破坏系统安全的行为；利用技术或其他手段破坏、扰乱优谷活动帮平台的运营或他人对优谷活动帮平台的使用；以任何方式干扰或企图干扰优谷活动帮平台的任何产品或任何部分、功能的正常运行，或者制作、发布、传播上述工具、方法等。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）申请和注册与平台及平台关联方相同或近似的商标、名称、标识、标志、微信公众号、域名、网页等，用于开展与平台及平台关联方实质相同或近似的业务。<br/>
      4.3您保证：不对平台、技术接口、本服务数据进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）；不对平台、技术接口、本服务数据进行内容、功能、逻辑及界面等任何方面的修改；不得将平台、技术接口、本服务数据或业务用于本协议以外目的。<br/></span>
      
      <span class="bold">第五条 知识产权</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1<span class="bold">【知识产权独自享有】</span>双方各自享有的商标权、著作权或者其他知识产权，均仍归各方单独享有，并不会因为双方签订或者履行本协议而转归对方享有，或者转归双方共同享有。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2<span class="bold">【尊重第三方】</span>任何一方均应尊重相对方、第三方的知识产权，未经相关权利人许可，不得以任何形式进行使用或创造相关衍生作品。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.3<span class="bold">【商业标识】优谷活动帮平台在本服务中所使用的“优谷活动帮”、优谷活动帮表情包及LOGO等商业标识，其著作权或商标权归优谷活动帮平台所有。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.4<span class="bold">【网站相关权属】</span>优谷活动帮平台官网上由平台上传、制作、拥有的所有内容，包括但不限于文字、图片、网站架构、网页设计，均由优谷活动帮平台及其关联公司依法拥有其知识产权。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.5<span class="bold">【软件相关权属】</span>除另有特别声明外，优谷活动帮平台提供本服务时所依托软件的著作权、专利权及其他知识产权均归优谷活动帮平台所有。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.6<span class="bold">【技术相关权属</span>】您仅拥有本协议约定合法使用本服务或优谷活动帮平台提供相关技术接口的权利，与本服务相关的技术接口、相关的著作权、专利权等相关全部权利归平台所有。<span class="bold">未经平台许可，您不得违约或违法使用，不得向任何单位或个人出售、转让、授权优谷活动帮平台的代码、技术接口及开发工具等。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.7<span class="bold">【知识产权侵权处理】</span>未经平台或权利人明确的书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用优谷活动帮平台网站或微信小程序等的信息内容，否则，平台有权追究其法律责任。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.8<span class="bold">【商业使用】您同意平台有权无偿使用您的名称、品牌、商标标识等作为商业案例进行宣传、展示。</span><br/>
      
      <span class="bold">第六条 服务终止与责任承担<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.1【服务终止情形】发生下列情形，服务期限终止：<br/>
      （1）双方协商一致终止的；<br/>
      （2）您违反法律法规或本协议约定，平台有权终止服务,并不退还您已经支付的费用。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.2【违约责任】使用平台服务时若违反有关法律法规规定的或者违反本协议相关约定的，平台依据本协议采取相应措施（包括但不限于暂停服务、终止服务等），不视为平台违约，若因此给您造成损失（包括但不限于业务暂停、数据清空等）的，均由您自行承担。同时，因您违反本协议约定产生的责任和后果由您自行承担，若给平台造成损失的，您应当予以赔偿。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.3【第三方索赔】若因您违反本协议的保证与承诺，导致或产生第三方主张的任何索赔、要求或损失，应当自行负责处理由此产生的争议，并承担全部法律责任，若平台因此遭受损失的，您应当一并赔偿。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.4【特殊限制措施】当您的行为存在侵权、欺诈、售假、盗用他人账户等特定情形或您存在危及他人交易安全或账户安全风险时，平台可对您采取相应的强制措施。</span><br/>
      
      <span class="bold">第七条 免责声明</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="bold">7.1【不可抗力及第三方原因】您理解并同意，在使用本服务时，须自行承担如下平台不可掌控的风险内容，包括但不限于：</span><br/>
      （1）不可抗力，包括但不限于自然灾害、政府行为、法律法规颁布调整、罢工（任一方内部劳资纠纷除外）、动乱等不能预见、不能避免并不能克服的客观情况。<br/>
      （2）基础运营商原因，包括但不限于电信部门技术调整、电信/电力线路被他人破坏、电信/电力部门对电信网络/电力资源进行安装、改造、维护。<br/>
      （3）网络安全事故，如计算机病毒、木马或其他恶意程序、黑客攻击的破坏。<br/>
      （4）您或第三方的电脑软件、系统、硬件和通信线路出现故障。<br/>
      （5）您操作不当或通过非平台授权的方式使用本服务带来的损失和风险。<br/>
      （6）其他非平台过错、平台无法控制或合理预见的情形。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7.2<span class="bold">【违约责任免除】因不可抗力、基础运营商原因、网络安全事故或其他超出当事人可合理掌控范围的事件，造成本协议迟延履行或任何一方违约，双方均无需承担违约责任。但是，受影响一方应尽可能及时通知另一方。如前述事件妨碍协议履行达30天以上的，任一方可提前15天书面通知对方终止协议。因本条款终止协议的，任何一方均无须承担违约责任。</span><br/>
      
      <span class="bold">第八条 通知和送达</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1<span class="bold">【通知送达】</span>本协议项下平台对于您的所有通知均可通过网页公告、站内消息、公众号通知、客户预留的电子邮件、手机短信或常规的信件传送等方式进行，该等通知于发送之日视为已送达。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.2<span class="bold">【联系方式实时更新】</span>为便于您收取相关通知，您应确保预留的联系方式为正确及有效，并在变更后及时登录平台修改，如因您未提供正确的联系信息或未及时告知新的联系方式，导致无法及时收取通知，将由您自行承担由此产生的损失及法律后果。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3<span class="bold">【有效阅读通知】优谷活动帮平台可通过上述方式之一或其中若干向您送达各类通知，而此类通知的内容或将对您产生重大有利或不利影响，请您务必确保联系方式为有效并请及时关注相应通知。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4<span class="bold">【消息推送】</span>您同意优谷活动帮平台可以向您的电子邮件、手机号码等发送可能与本服务不相关的其他各类信息包括但限于平台规则信息、活动信息、交易信息、商业广告等。<br/>
      
      <span class="bold">第九条 法律适用、争议解决与其他</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1<span class="bold">【协议更新】</span>您使用本服务即视为您已阅读并同意受本协议的约束。平台可能根据国家法律法规变化、业务调整、产品更新及维护交易秩序、保护消费者权益等需要对协议内容进行变更，变更后的协议内容将按照法定程序进行公示后生效，您可以在平台官网中查阅相关协议条款。<span class="bold">如您不同意变更的内容，您应当于本协议变更生效之日起停止使用本服务，变更事项对您不产生效力；如您在变更事项生效后仍继续使用本服务，则视为您同意变更后的协议。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.2<span class="bold">【协议签订地】本协议签订地为中华人民共和国广东省广州市天河区。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.3<span class="bold">【法律适用】</span>本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4<span class="bold">【管辖】若您和优谷活动帮平台之间发生任何纠纷或争议，应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.5<span class="bold">【可分性】</span>本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12.6<span class="bold">【标题】</span>本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。<br/>
      </p>
  </div>
</div>


  <div class="white_background">
  <div style="width: 94%; margin: 0 auto; line-height: 30px;">
    <p class="tite">优谷活动帮平台个人信息保护政策</p>
    <p class="text">
生效日期：2021年3月8日<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州优谷信息技术有限公司（以下简称 “我们”）依据《中华人民共和国网络安全法》、《信息安全技术个人信息安全规范》（GB/T35273-2020）以及其他相关法律法规和技术规范制定了《优谷活动帮平台个人信息保护政策》（简称“本政策”）。为了更好的保护您的个人信息，建议您仔细阅读更新后的《优谷活动帮平台个人信息保护政策》，尤其是<span class="bold">以黑色加粗的条款。如您对本政策条款有任何异议或疑问，您可通过本《优谷活动帮平台个人信息保护政策》第八条“联系我们”中公布的联系方式与我们沟通。</span>
<br/>
《优谷活动帮平台个人信息保护政策》目录<br/>
一、引言；<br/>
二、个人信息收集使用规则；<br/>
三、我们如何保护您的个人信息安全；<br/>
四、您如何行使您的个人信息权利；<br/>
五、我们如何保护未成年人的个人信息；<br/>
六、我们如何使用Cookie和同类技术；<br/>
七、本个人信息保护政策如何更新；<br/>
八、如何联系我们。<br/>

一、<span class="bold">引言</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1《优谷活动帮平台个人信息保护政策》适用于优谷向您提供的所有服务，服务包括通过优谷网站、微信公众号、微信小程序、客户端、软件工具开发包向您提供的技术服务。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2<span class="bold">优谷活动帮平台（以下简称“平台”）服务中可能部分由我们的关联公司提供，但未设独立的个人信息保护政策，本政策同样适用于该部分服务。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.3请您在使用平台的各项服务前，仔细阅读并充分理解本政策的全部内容。<span class="bold">一旦您使用或继续使用平台的服务，即表示您同意我们按照本政策使用和处理您的相关信息。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.4您需理解，<span class="bold">只有在您确认并同意《优谷活动帮平台个人信息保护政策》，我们才会依据本政策收集、使用、处理和存储您的个人信息。</span>您有权拒绝同意本政策，但请您知悉，一旦您拒绝同意本政策，可能导致您不能使用平台的相关服务和功能，或者无法达到我们拟达到的服务效果。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.5<span class="bold">个人信息：</span>指以电子或者其他方式记录的能够单独或者与其他信息结合识别自然人个人身份的各种信息，包括姓名、出生日期、身份证件号码、个人生物识别信息、住址、通信通讯联系方式、通信记录和内容、账号密码、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息等。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.6<span class="bold">个人敏感信息：</span>指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息，包括身份证件号码、个人生物识别信息、银行账号、通信记录和内容、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息、14岁以下（含）儿童的个人信息等。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.7<span class="bold">个人信息删除：</span>指在实现日常业务功能所涉及的系统中去除个人信息的行为，使其保持不可被检索、访问的状态。<br/>

<span class="bold">二、个人信息收集使用规则</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1我们如何收集和使用您的个人信息</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了向您提供服务、保障服务的正常运行、改进和优化我们的服务，平台会根据权责一致原则、目的明确原则、选择同意原则、最小必要原则、确保安全原则、主体参与原则、公开透明等原则收集您的个人信息。我们收集和使用您的个人信息类型包括两种：第一种，我们产品/服务的核心业务功能所必需的信息，此类信息为产品/服务正常运行的必备信息，您须授权我们收集和使用。如您拒绝，您将无法正常使用我们的产品/服务。第二种，非核心业务功能可能需要收集的信息，您可以选择是否授权我们收集。如您拒绝提供，将导致某些功能无法实现或无法达到我们拟达到的效果，但不影响您对核心业务功能的正常使用。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.1【注册】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">当您在创建平台的账号时，您须提供您在中华人民共和国境内手机号码，设置、确认您的登录密码。</span>您提交的手机号码用于您注册、登录、绑定账号、密码找回时接受验证码，并且作为您与平台指定的联系方式之一，用来接受相关业务通知（如新品上线、服务变更等），并且平台可通过此联系方式向您发送业务通知（含账单）或与您进行业务沟通。<br/>
<span class="bold">收集手机号码是为了满足相关法律法规的网络实名制要求，若您不提供这类信息，您可能无法正常使用我们的服务。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.2【下单及订单管理】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您在订购平台的服务或订购第三方依托平台提供的商品及/或服务时，我们会通过系统为您生成购买该商品及/或服务的订单。<span class="bold">在下单过程中,您可能需要提供您的收货人姓名、收货地址、收货人联系电话，对于部分特殊类型的商品及/或服务您还需要提供该商品或服务所必需的其他信息。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们收集这些信息是为了帮助您顺利完成交易、保障您的交易安全、便于您查询订单信息、提供客服与售后服务及其他我们明确告知的目的。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以通过平台为其他人订购商品及/或服务，您需要提供该实际订购人的前述个人信息，并确保已取得其他人的同意。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">为便于您了解查询订单信息并对订单信息进行管理，我们会收集您在使用我们服务过程中产生的订单信息用于向您展示及便于您对订单进行管理。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.3【支付】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为完成订单支付，您可根据页面提示选择付款方式。为使我们及时获悉并确认您的支付进度及状态，为您提供售后与争议解决服务，<span class="bold">您同意我们可自您所选择的交易对象、微信支付所属公司或您选择的其他金融机构处收集与支付进度相关信息。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.4【商品或服务交付】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为保证您购买的商品及/或服务能够顺利、安全、准确送达或如约向您提供服务，我们会向商品及/或服务提供方选择的相应物流配送主体同步相关配送信息。<span class="bold">您知晓并同意相应物流配送主体不可避免地获知及使用您的配送信息，用于完成交付目的。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为使我们及时获悉并确认交付进度及状态，向您提供售后与争议解决服务，<span class="bold">您同意我们可自物流相关服务主体处收集与交付进度相关的信息。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.5【客服及争议处理】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您与我们联系或提出售中售后、争议纠纷处理申请时，为了保障您的账号及系统安全，我们需要您提供必要的个人信息（包括账号信息、订单信息）以核验您的身份。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为便于与您联系、尽快帮助您解决问题或记录相关问题的处理方案及结果，我们可能会保存您与我们的沟通、通信/通话记录及相关内容（包括账号信息、订单信息、您为了证明相关事实提供的其他信息，或您留下的联系方式信息），如果您针对具体订单进行咨询、投诉或提供建议的，我们会使用您的账号信息和订单信息。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.6【信息公开发布功能】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可通过我们为您提供的评论、消息互动、直播及其他信息发布功能公开发布信息，包括发布图文/视频/直播内容、发表评价及问答内容等（具体功能以平台提供的为准）。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">请注意，您公开发布的信息中可能会涉及您或他人的个人信息甚至个人敏感信息，如您在评价时选择上传包含个人信息的图片。请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。若您公开发布的信息中涉及他人个人信息的，您需在发布前征得他人的同意。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.7【信息采集】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品及/或服务的提供方为提供更优质的服务，可能使用信息采集功能。当您通过信息采集功能提交个人信息<span class="bold">（如姓名、手机号码、身份证号码、住址）</span>时，您的个人信息将被同步给商品及/或服务的提供方。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.1.8【其他附加服务】</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">您理解并同意，我们提供的产品/服务可能需要您在您的设备中开启您的位置信息、相机、相册、麦克风、悬浮窗、接受/读取短信的访问权限，以实现这些权限所涉及信息的收集和使用。</span>我们会在您使用相关服务时弹窗提示相关用途并询问您是否要开启相应权限。您可在您的设备设置查看上述权限的状态，并可自行决定这些权限随时的开启或关闭。请您注意，您开启任一权限即代表您授权我们可以收集和使用相关个人信息来为您提供对应服务，您一旦关闭任一权限即代表您取消了授权，我们将不再基于对应权限继续收集和使用相关个人信息，也无法为您提供该权限所对应的服务。但是，您关闭权限的决定不会影响此前基于您的授权所进行的信息收集及使用。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">您充分知晓，以下情形中，我们收集、使用个人信息无需征得您的授权同意：</span><br/>
（1）与个人信息控制者履行法律法规规定的义务相关的；<br/>
（2）与国家安全、国防安全直接相关的；<br/>
（3）与公共安全、公共卫生、重大公共利益直接相关的；<br/>
（4）与刑事侦查、起诉、审判和判决执行等直接相关的；<br/>
（5）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人授权同意的；<br/>
（6）所涉及的个人信息是个人信息主体自行向社会公众公开的；<br/>
（7）根据个人信息主体要求签订和履行合同所必需的；<br/>
（8）从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br/>
（9）维护所提供产品或服务的安全稳定运行所必需的，如发现、处置产品或服务的故障；<br/>
（10）个人信息控制者为新闻单位，且其开展合法的新闻报道所必需的；<br/>
（11）个人信息控制者为学术研究机构，出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如我们停止运营平台的产品或服务，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，对所持有的个人信息进行删除或匿名化处理。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.2我们如何委托处理、共享、转让、公开披露您的个人信息</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.2.1委托处理</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对我们委托处理个人信息的公司、组织和个人，我们会与其签署严格的保密协定，要求他们按照我们的要求、本个人信息保护政策以及其他任何相关的保密和安全测试来处理个人信息。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.2.2共享</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们不会与公司以外的任何公司、组织和个人分享您的个人信息，除非获得您的明确同意。<br/>
（1）在您主动选择情况下共享：<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若您主动通过平台购买商品及/或服务，我们会根据您的选择，将您的订单信息与交易有关的必要信息与相关商品及/或服务的提供者共享来实现您向其购买商品或服务的需求，并促使其可以完成后续的售后服务。<br/>
（2）在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的用户信息；<br/>
（3）在法定情形下的共享：我们可能会根据法律法规规定、诉讼、仲裁解决需要，或按行政、司法机关依法提出的要求，对外共享您的用户信息；<br/>
（4）为了促成交易或协助解决争议，某些情况下只有共享您的用户信息，才能促成交易或处理您与他人的纠纷或争议；<br/>
（5）与授权合作伙伴分享：若我们委托授权合作伙伴为您提供某些服务或代表我们履行职能，我们仅会出于合法、正当、必要、特定、明确的目的共享您的信息，授权合作伙伴只能接触到为其提供服务所需信息，且不能将此信息用于任何其他目的。<br/>
对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的数据保护协议，要求他们按照我们的说明、本个人信息保护政策以及其他任何相关的保密和安全措施来处理个人信息。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">2.2.3转让</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们不会将您的个人信息转让给任何公司、组织和个人，<span class="bold">但以下情形除外</span>：<br/>
（1）在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；<br/>
（2）根据适用的法律法规、或强制性的行政或司法要求；<br/>
（3）在涉及合并、收购或破产清算时，如涉及个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此个人信息保护政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。<br/>
<span class="bold">2.2.4公开披露</span><br/>
我们仅会在以下情况下，公开披露您的个人信息：<br/>
<span class="bold">（1）获得您明确同意后；</span><br/>
<span class="bold">（2）基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。</span><br/>
<span class="bold">（3）因需要对违规账号、欺诈行为等进行处罚公告的。</span><br/>
特别提示：<span class="bold">对于公开披露的您的个人信息，我们会在收到公开披露申请后第一时间且审慎审查其正当性、合理性、合法性，并在公开披露时和公开披露后采取最严格个人信息安全保护措施和手段对其进行保护。</span><br/>
<span class="bold">2.2.5共享、转让、公开披露您的个人信息的的例外</span><br/>
以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：<br/>
<span class="bold">
（1）与国家安全、国防安全直接相关的；<br/>
（2）与公共安全、公共卫生、重大公共利益直接相关的；<br/>
（3）与犯罪侦查、起诉、审判和判决执行等直接相关的；<br/>
（4）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br/>
（5）个人信息主体自行向社会公众公开的个人信息；<br/>
（6）从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br/>
（7）根据法律规定，若我们对个人信息采取技术措施和其他必要措施进行处理，使得数据接收方无法重新识别特定个人且不能复原，则此类处理后数据的共享、转让、公开披露无需另行向您通知并征得您的同意。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2.6我们如何存储您的个人信息<br/>
（1）我们将按照有关法律法规规定，将在中国境内收集的个人信息存储于中国境内。<br/>
（2）一般而言，我们仅在实现目的所必需的最短时间内存储您的个人信息。但根据法律法规规定或行政、司法机构、国家部门等有权机关的要求，我们有可能更改个人信息的存储时间；<br/>
（3）当我们的产品或服务发生停止运营的情形时，我们将以推送通知、公告等形式通知您，并在合理的期限内删除您的个人信息或进行匿名化处理。<br/>

<span class="bold">三、我们如何保护您的个人信息安全</span><br/></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1我们使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权的访问、公开披露、使用、修改，防止数据发生损坏或丢失。我们将在合理的安全水平内使用各种安全保护措施以保障信息的安全。例如，我们会使用加密技术、匿名化处理等手段来保护您的个人信息。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2我们建立专门的管理制度、流程和组织确保您的信息安全。如部署访问控制机制，严格限制访问个人信息的人员范围等。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3我们会采取合理可行的措施，尽力避免收集无关的个人信息。我们只会在达成本政策所述目的所需的期限内存储您的个人信息，除非需要延长存储期或受到法律的允许。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。<br/>

<span class="bold">四、您如何行使您的个人信息权利</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1您有权查询、更正或补充您的信息。您可以通过以下方式自行进行：<br/>
<span class="bold">登录平台的账号，进入“账号主页”，点击“账号设置”后查询、更正个人资料及个人账号相关信息；如果您无法通过上述方式变更个人信息，可以随时联系我们的客服。我们将在15个工作日内回复您的请求。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2您有权删除您的个人信息：<br/>
在以下情形中，您可以向我们提出删除个人信息的请求：<br/>
（1）如果我们处理个人信息的行为违反法律法规；<br/>
（2）如果我们收集、使用您的个人信息，却未征得您的同意；<br/>
（3）如果我们处理个人信息的行为违反了与您的约定；<br/>
（4）如果您不再使用我们的产品或服务，或您注销了账号；<br/>
（5）如果我们不再为您提供产品或服务。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应信息，但会在备份更新时进行删除。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.3您有权改变您授权同意的范围：<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个业务功能需要一些基本的个人信息才能得以完成，对于额外收集的个人信息的收集和使用，您可以给予或收回您的授权同意。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您希望变更您的授权范围，可以随时联系我们的客服。我们将在15个工作日内回复您的请求。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.4您有权通过如下方式注销账号：<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如需注销账号，您可以通过本政策第八条联系我们的客服申请注销。<span class="bold">在您主动注销账号之后，我们将停止为您提供产品或服务，并根据适用法律的要求删除您的个人信息，或对其进行匿名化处理。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.5响应您的上述请求<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为保障安全，您通过联系客服等方式提出上述请求时需要提供书面文件，或以其他方式证明您的身份。我们将要求您验证自己的身份后响应您的请求。我们对于您的书面请求响应时间为15个工作日。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">对于您合理的请求，我们可免费提供服务，如涉及第三方费用，在我们为您提供相应证据后由您自行承担相关成本。请注意，针对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.6在以下情形中，我们将无法响应您的请求：<br/>
（1）与个人信息控制者履行法律法规规定的义务相关的；<br/>
（2）与国家安全、国防安全直接相关的；<br/>
（3）与公共安全、公共卫生所所生、重大公共利益直接相关的；<br/>
（4）与刑事侦查、起诉、审判和执行判决等直接相关的；<br/>
（5）个人信息控制者有充分证据表明个人信息主体存在主观恶意或滥用权利的；<br/>
（6）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br/>
（7）响应个人信息主体的请求将导致个人信息主体或其他个人、组织的合法权益受到严重损害的；<br/>
（8）涉及商业秘密的。<br/>

<span class="bold">五、我们如何保护未成年人的个人信息</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1本政策所指的儿童是指不满14周岁的个人。未经监护人的明示同意，儿童不得创建自己的优谷活动帮平台的账号。如您为年满14周岁的未成年人，建议您请您的监护人仔细阅读本个人信息保护政策，并在征得您的监护人同意的前提下使用我们的服务或向我们提供信息。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2对于经监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们将在法律法规允许、监护人明示同意或者保护未成年人所必要的范围内使用、分享、转让或披露此信息。若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，您可以通过平台的客服与我们取得联系。<br/>

<span class="bold">六、我们如何使用Cookie和同类技术</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1Cookie的使用<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.1为确保网站正常运转、为您获得更轻松的访问体验、向您推荐您可能感兴趣的内容，我们会在您的计算机或移动设备上存储名Cookie、Flash Cookie或浏览器或关联应用程序提供的其他通常包含标识符、站点名称以及一些号码和字符的本地存储（统称“Cookie”）。通过Cookie，我们会收集您的信息，以为您提供更好的用户体验和服务。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.2您可以通过浏览器设置管理Cookie，但如果您修改对Cookie的接受程度或拒绝我们的Cookie，可能会影响您安全访问我们的网站，部分服务也可能无法正常使用。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2网站信标和像素标签<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除Cookie外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的地址链接，如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好以便于我们主动改善客户服务体验。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。<br/>

<span class="bold">七、本个人信息保护政策如何更新</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了给您提供更好的服务，我们会根据产品的更新情况及法律法规的相关要求更新《优谷活动帮平台个人信息保护政策》的条款，该等更新构成《优谷活动帮平台个人信息保护政策》的一部分。未经您明确同意，我们不会削减您按照本政策所应享有的权利。如该等更新造成您在本《优谷活动帮平台个人信息保护政策》下权利的实质减少或重大变更，我们将在本政策生效前通过在显著位置提示或向您发送推送消息或以其他方式通知您，若您继续使用我们的服务，即表示您充分阅读、理解并同意受经修订的《优谷活动帮平台个人信息保护政策》的约束。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重大变更包括但不限于：<br/>
<span class="bold">（1）我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；<br/>
（2）我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；<br/>
（3）个人信息共享、转让或公开披露的主要对象发生变化；<br/>
（4）您参与个人信息处理方面的权利及其行使方式发生重大变化；<br/>
（5）我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化；<br/>
（6）个人信息安全影响评估报告表明存在高风险时。<br/></span>

<span class="bold">八、如何联系我们</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您对《优谷活动帮平台个人信息保护政策》的内容或使用我们的服务时遇到的与个人信息保护相关的事宜有任何疑问或进行咨询或投诉时，您均可以通过如下任一方式与我们取得联系：<br/>
（1）您可通过优谷活动帮平台官网登录账号通过在线客服与我们联系；<br/>
（2）您可以拨打客服电话020-37346335与我们联系；<br/>
（3）您可以发送电子邮件至support@iyougu.com与我们个人信息保护团队取得联系。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们会在收到您的意见及建议后，并在验证您的用户身份后的15个工作日内尽快向您回复。<span class="bold">需注意的是，我们可能不会回复与本政策或与个人信息保护无关的问题。</span><br/>

    </p>
  </div>
</div>



  </div>

    </div>
  </div>
  </div>
  
  </div>
</template>

<script>
export default {
  // props:{
  //   btn:Boolean,
    
  // },
  data() {
    return {
      select:false,
      noBtn:require("../assets/images/login/no.png"),
      yesBtn:require('../assets/images/login/yes.png'),
      myPhone:'',
      dataFrom:true,
      myCode:'',
      codeBtn: '发送验证码',
      codeBtnStatus: false,
      errText:'',
      dbClick:true,
      miao:false,
      err:false,
      userAgree:false
    }
  },
  watch:{
    errText:function(newVal,oldVal){
      if(this.errText.length>0){
        this.err=true
      }else{
        this.err=false
      }
    }
  },
  methods: {
    closeAgree(){
      this.userAgree=false
    },
    agrees(){
      this.userAgree=true
    },
    close(){
      this.$emit('close')
    },
    me(){
       
      this.select=!this.select;
      // if (this.myPhone.length >= 11 && this.myCode.length >= 4 && this.select==true) {
      //   this.dataFrom = false
      // } else {
      //   this.dataFrom = true
      // }
      // this.$emit('clickMe',this.select)
      this.errText = ''
    },
    phoneNum(event){
      this.myPhone = event.currentTarget.value
      if (this.myPhone.length >= 11 && this.myCode.length >= 4) {
        this.dataFrom = false
      } else {
        this.dataFrom = true
      }
    },
    searchCode(event) {
      this.myCode = event.currentTarget.value
      if (this.myPhone.length >= 11 && this.myCode.length >= 4) {
        this.dataFrom = false
      } else {
        this.dataFrom = true
      }
    },
    login() {
        if (!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
          this.errText = '*请输入正确的电话号码'
          return
        }else if(this.myCode.length < 4){
          this.errText = '*请输入正确的验证码'
          return
        }else if(this.select==false){
          this.errText = '*请先同意用户协议和隐私政策'
          return
        }else{
          if(!this.dbClick){
            return
          }
          this.dbClick = false
          this.axios.post('/api/v1/login/mobileLogin',{
            "data":{
              mobile:this.myPhone,
              smsCode:this.myCode
            }
          }).then(res=>{
            if(res.data.result==true){
              this.$cookies.set('sessionId',res.data.data.sessionId,60 * 60 * 24)
              if(res.data.data.isNewUser==1){
                this.$emit('success',true)
              }else{
                this.$emit('olderUser',false)
                this.$router.go(0)
              }
              
            }else if(res.data.result==false){
              this.errText='*'+res.data.message
            }
            this.dbClick = true
          },error=>{
            if(error.response.data.message=='缓存用户信息不存在'){
                this.$cookies.remove("sessionId")
                this.$router.push({path:'/login'})
            }
            this.dbClick = true
          })
        }
      },
    sendCode() {
        // console.log('发送成功')
        if(this.myPhone == ''){
          this.errText = '*手机号码不能为空'
          return false;
        }
        if (!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
          this.errText = '*请输入正确的电话号码'
          return false;
        } else {
          this.errText = ''
          // this.codeBtn = ''
          
          this.axios.post('/api/v1/login/sendSmsCode', {
            data: {
              "mobile": this.myPhone,
            }
          }).then(res => {
            if(res.data.code==600008){
              // this.$toast(res.data.message)
              // console.log(res.data.message)
              this.$message({
                message: '获取验证码太频繁，请稍后重试',
                type: 'warning'
              })
            }
          })
          setTimeout(() => {
            this.countDown(60)
          }, 5)
        }
      },


      countDown(val) {
        //判断定时器是否存在
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.codeBtn = '发送中'
        this.codeBtnStatus = false
        this.miao=true
        //setTiemOut 执行一次
        // setInterval 不断执行，需要条件才会停止
        let tim = val;
        this.timer = setInterval(() => {
          tim--;
          if (tim === 0) {
            clearInterval(this.timer)
            this.codeBtnStatus = false
            this.codeBtn = '重新获取'
            this.miao=false
          } else {
            this.codeBtnStatus = true
            this.codeBtn = `${tim}s`
          }
        }, 1000)
      },
  },
 
}
</script>

<style scoped lang="scss">
  @import url(./../assets/css/login.css);
  .phone{
    width: 304px;
    position: absolute;
    top: 84px;
    left: 40px;
  }
  .phone p{
    width: 304px;
    font-size: 14px;
    color: #666666;
    text-align: left;
    /* display: block; */
  }
  .phone input{
    margin-top: 10px;
    width:304px ;
    font-size: 14px;
    border: none;
    line-height: 24px;
    height: 24px;
    border-bottom: 1px solid #EEEEEE;
  }
  .phone .errPhone{
    margin-top: 10px;
    width:304px ;
    font-size: 14px;
    border: none;
    line-height: 24px;
    border-bottom: 1px solid #FE4600;
  }
  .phoneCode{
    width: 304px;
    position: absolute;
    top: 177px;
    left: 40px;
    border-bottom: 1px solid #eee;
  }
  .phoneCodeErr{
    width: 304px;
    position: absolute;
    top: 177px;
    left: 40px;
    border-bottom: 1px solid #FE4600;
  }
  .phoneCode p{
    width: 304px;
    font-size: 14px;
    color: #666666;
    text-align: left;
  }
  .code input{
    margin-top: 10px;
    font-size: 14px;
    border: none;
    line-height: 24px;
    height: 24px;
    float: left;
  }
  .code span{
    margin-top: 12px;
    float: left;
    font-size: 16px;
    color: #eee;
  }
  .code button{
    border: none;
    background: #fff;
    color: #1677FF;
    font-size: 14px;
    float: left;
    margin-top: 12px;
    margin-left: 16px;
  }
  .code{
    button{
      cursor: pointer;
    }
    
  }
  .code .miao{
    border: none;
    background: #fff;
    color: #CCCCCC;
    font-size: 14px;
    float: left;
    margin-top: 12px;
    margin-left: 16px;
  }
  .Select{
    width: 304px;
    position: absolute;
    bottom: 103px;
    left: 40px;
    cursor: pointer;
  }
  .Select img{
    width: 16px;
    height: 16px;
    float: left;
    margin-top: 2px;
  }
  .Select span{
    font-size: 14px;
    float: left;
    margin-left: 8px;
    color: #999999;
  }
  .Select a{
    color: #4086F7;
    margin-left: 8px;
  }
  .btn{
    width: 304px;
    height: 32px;
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
  .btnNO{
    width: 304px;
    height: 32px;
    border: none;
    background: #B9D6FF;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
  }
  .btnYes{
    width: 304px;
    height: 32px;
    border: none;
    background: #1677FF;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  .errer{
    position: absolute;
    top: 248px;
    left: 40px;
  }
  .errer p{
    font-size: 14px;
    color: #FE4600;
    text-align: left;
  }
  .tite{
    font-size:20px;
    text-align: center;
    line-height: 50px;
  }
  .text{
    font-size: 15px;
  }
  .bold{
    font-weight: bold;
  }
.white_background{
  background: #fff;
}
.llw{
  height: 500px;
 overflow-y: scroll;
}
</style>