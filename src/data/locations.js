export default {
  start: {
    name: "LANDING SITE",
    dir: { north: "forestA", east: "beachB", west: "beachD" },
    text: "Once on shore, you are greeted by the warm sun and sound of waves crashing against the rocky shore.  You open your eyes and look around. The beach is deserted, save for a few seagulls flying overhead.  To the East, you can see a lighthouse, to the North there is the edge of the forest, and to the West there appears to be some debris on the beach."
  },
  beachB: {
    name: "OLD LIGHTHOUSE",
    dir: { west: "start", extra: [{ action: "climb", loc: "beachC" }] },
    text: "The lighthouse is a tall, white structure with a red roof, the sound of the waves crashing against the rocks below.  Next to the door, you notice a keypad awaiting a 3-letter code to open the door."
  },
  beachC: {
    name: "LANTERN ROOM",
    dir: { extra: [{ action: "descend", loc: "beachB" }] },
    cipher: true,
    check: 'jxakac',
    text: "Nkou mhm mox hf bae tbgpmhwnsm, roc aadx a jxacminnl dbee hf bae wveig. Ywn cig smx fwk mqeea bn moezr dqkekmiwg.  Ywn nwmikx tpx lifp ql spttbxrmw.  Abmakael mo wge wy tpx wqgdwps, ghu nbnl t nwme baab keiws:\\v\\gTPX LQZHB YRWF TPBS PHUAX WIL MG LOTX FZBEVW IV MHM EOVZ, DIKK VBGPMS.\\vGOE MHIM IBL KMR FMTTCKE QL GWGE, Q TM TXFB PIBA JCLT BAE ETVML.\\nBAE AHUVW ON MHMF CWGSBTNBEY KKAAAIVZ IV MHM WAZDNMLS QL MIWDMGIVZ.\\nQY YWN FQGD BAIA GOBX, PTXAAX KVHW BAAB B NMOEZ FEIGT NHR BAIA MO PTPXXN."
  },
  beachD: {
    name: "SHIPWRECK",
    dir: { east: "start" },
    text: "As you approach the large, dark shape, half-buried in the sand, yo recognize it as an old ship that crashed ashore.  It's clear that it's been there for a long time, the wood is weathered and bleached by the sun and the sails torn and tattered.  You examine the wreckage and notice there is something carved into the wood: ITA"
  },
  forestA: {
    name: "EDGE OF THE FOREST",
    dir: { south: "start", north: "forestB", west: "forestC" },
    text: "As you come to the edge of the forest, you are greeted by the sound of birdsong and the rustle of leaves in the wind.  The forest is dense and dark, and you cannot see very far in any direction.  As you are examining the area, you notice 4 piles of rocks around a tree with what looks like a compass caved into it.  The number of rocks in each pile are: 11, 4, 10, 6"
  },
  forestB: {
    name: "SPARKLING LAKE",
    dir: { south: "forestA", extra: [{ action: "play", loc: "templeA", item: "rf" }] },
    cipher: true,
    check: 'uzvekxq',
    text: "Llpkarv elrgyvs xhw jdcisl, cdf goei iz e cdipcmny.  Mc ele emsope gj isi cdipcmny mh l pajkt wekw, xwp aalig l fesyitjud fafi cgpdc.  Es qsj helc eazre llt dlojiatre, qsj ystagt dsmwxwtrg kxxnoifk dfx ox xwp wafh.  Stkgarv tx uh, mi ltpwegd xo ti p mvauiapx msht zj a vegv qelea, dqogxw lrd usdw xo llt esuul.  Teghwh pcsufh isi mwxpw erw ppcke tmgow afh bfwiu rdeis.  Ar isi cwripv ik e hxeld, vdfrd kxdyi, shegvpifk qcmgzx gph if xwp wufpxrlt."
  },
  forestC: {
    name: "MASSIVE TREE",
    dir: { east: "forestA", extra: [{ action: "enter", loc: "forestD" }] },
    cipher: true,
    check: 'uzvekxr',
    text: "Nzy cgqt es a eehdmvw xgpi if xwp jojihe, wo tmv elal cdf gaf'x hpi tzi izt ox mi.  Helcmcr ergyco xhw qpdwini icync, cdf rolmrp e seeaw hogvllc, bsvtwc lsvvp ingyvs xo kujpizw xwcsuyl.  Pcsufh isi dgsghey svt ppatsglxe ueggmnyw sptiuxxyk szmed sn llt hetwv, pyh bavsd jlqmcr svwvwped.  Llt deidsgd ephipc xo ti rppetvpemny, talcifk bfwiu axel tzixc waaph qyld su hmnv."
  },
  forestD: {
    name: "TREE HOUSE",
    dir: { extra: [{ action: "exit", loc: "forestC" }] },
    items: ['rf'],
    cipher: true,
    check: 'uzvekxs',
    text: "Tyxejmcr xhw xgpi, ygy utrd qsjcwedj xy e smvecmsarvwc shertsuk egpe.  Tzi llplk egp tauoto aill rzpojjjw jlmxtd env wicmnyis trslvjxinlw.  Isi psmceid xpdzv ik e htkhl xd mihgps, oipagitrg s ppvi waxw hevww pyh ratewis llpe pogo atoe lltj gomps xsvw ei lry esbprt.  Ar isi cwripv ik e slvk, kxdyi pwhtdxad, wtpqifk iz viki ja sul su ele oeipv.  Of xwp wivi dq xhw ttoislea tw a hppbye llpe veshh:\\y\\rA TMGO SF LLT DIA, OMIS AIFKH LW WAHT LW TZI HVC.\\nS VDZWT, GRAJ ECUIHDMBDI QJ TLSCXYK TZI HLGRWH XYWTJYBPRT.\\fMI'D GODSG, DS BJMAWMAFX, XE'W FGVB DS MSVKPPOMW."
  },
  templeA: {
    name: "TEMPLE ENTRANCE",
    dir: { south: "forestA", extra: [{ action: "enter", loc: "templeB" }] },
    cipher: true,
    check: 'kipuwyt',
    text: "Klh ypgipv vlxpm hyk si ysy eebi, dqmumvfwv xeumyvw gjnikekmql ebx gfvqjcm.  Mlv alsrm hj klh fwvtxisvx llx wgvhfo qbhv, eqi ebx lvegi llx xlvqjo nharvgx ebx wbc.  Wmp ygxzvh xelngkyuj tm feui rk dghskl, zmtnx qrveqp qbxy hdwv, iuwzhlfy nbpvw onycgk klh joaxw.  Rprsr qbxy xkj eyftci, d blfdarc kfd lbwvr rze iy xyi ofvy, tpcsznya rsl xr fnwxwj xkj phmvrrfj."
  },
  templeB: {
    name: "TEMPLE INTERIOR",
    dir: { south: "forestB" },
    cipher: true,
    check: 'kipuwyu',
    text: "TODO"
  },
}