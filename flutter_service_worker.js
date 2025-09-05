'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d78f62a00c46bad2852caea68e1de0e4",
".git/config": "aa97a4e9a5f1e60f3a5055c7bedda366",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac53410ca7638d6f7cfa2a6edc2ca597",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69a48353a075dd8fa8c3050e6fe1579b",
".git/logs/refs/heads/gh-pages": "d9f6686f49ecc87fbdfc6815d2fafc11",
".git/logs/refs/heads/main": "914f07558a2365413d72b83f686a11b1",
".git/logs/refs/remotes/origin/gh-pages": "e611a59bf181dd8b2d47d87d6aa4381c",
".git/logs/refs/remotes/origin/main": "a4f12728ec7f5581617ee00178758459",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/4919895848829fb836e77d367b76f44595ef63": "249e307dcb499aab7865890a56c202d4",
".git/objects/03/838f915e2be8417e9f2faba8087b40027b3938": "4a84c162033f28d3326d25ecdeaab2b9",
".git/objects/04/e40fd127688123ed1aacef47e8879afe43d630": "6499e477e546a3b2f4bd41bdc149962e",
".git/objects/07/a9cb5ec0283f8ec8249547a44fa284ec310bf2": "2cad8f43638b9dd9674a9ab4db8d6526",
".git/objects/08/79d9128230a8a226abb8754e7f32b59bb5b310": "61a8cbda56d9addda730dec4fd4bd791",
".git/objects/0a/66835f7482ad6e8ec7f2e2783ca5c658485528": "ea7d0315db48f5ad9bac4dc8d52a6893",
".git/objects/0b/66587b62ceb0bda93aa0cdebdbafd423b85f9a": "663040025d065406a083e117d5ea4a37",
".git/objects/0b/94dd249eb5de28b14c11811d380bdc6202cb2f": "75eff3fe1ba93f8af63c7d7ed370d6a0",
".git/objects/0b/f3b7138706d50c8e782880c623e3ac768aa20b": "a948bb7eec1df8b15e2d5652ec62abbc",
".git/objects/0c/6a19b65382c9c05b79add48a0e8a077350c019": "c1a50140cc3700d86fba4b60392cd112",
".git/objects/0f/06010ab43b6394b0033fee071cf4a8c75baf42": "266bac87b9ad65218ee31860f7a5b5bf",
".git/objects/0f/ce02df45bfdb3b0f3a0c7340ef0b5594ab9a42": "90bb592cfc5664c70afacce5f6eb4a90",
".git/objects/11/6217323148d4f302fa15695c750360bed63e7f": "cb2b7a3c1d5ad5253fee2a4cb1cd05a1",
".git/objects/16/d450f8563c076aceb34870273d2840aebd5ee9": "a2969f0dea8efd7fb0c2a1985818acb7",
".git/objects/17/9bfe038239f32666ee62e779586406ba43805b": "68a31fb67ea692c134b738b7b38f255a",
".git/objects/17/e48fc26f2a91ab03d94cb7c4e4f6d6dba5f516": "c72e230bfad7631d30c8a4eabfc6a5b6",
".git/objects/18/c2b343494617ba08ce3065f8746b105889e0e6": "a6df309e77a29cfb07e065bd6bf039d8",
".git/objects/19/1ba298a52e63b89864fcd37ad671792883a914": "018e164b9bf37c4e27c00eb49b53af60",
".git/objects/1a/30f0e6091283d6e49973e5361c682646980997": "fec4a0c955ae0c31a271d66ed0bb0a76",
".git/objects/1a/b54667e2cb989d611cabe6dfbd2a8171ab8d5b": "f878b038c0cda8144fae6f30f585f055",
".git/objects/1b/e3066d965146b6962673c9d875658e005884c0": "5deee5775888b265dd5364eb936be001",
".git/objects/1e/4fbec3b496e70b64a401b5715bdbda346115f5": "8871ea98c54b3fdd9fd20230a6cf06ad",
".git/objects/1f/a55bd45cc73150339ec85d4d6391327f2adaee": "01f4d74a29db49afc77b6dcab978623f",
".git/objects/1f/baec3a3f4ee51d404a8de5e921fe44179889f1": "d09d794f18e1819bdfada132c54d1333",
".git/objects/20/17b1c97808d89b3fed6ac36d9a5dfc5b1b8606": "c599f876dde892a9217f733218e9a52d",
".git/objects/20/31fa7bad0a2d53a06be1cc04dd93f710090929": "bfaa41eec5da630f15d0f120d85aaf6d",
".git/objects/20/38a9e2051c370b3419f15777505fc8d0cfff7c": "4c1a1c4ba9ad7a8b8b07baef72b34210",
".git/objects/22/207041b601b292e298a8b2ad0ad79f1cf95ab3": "3d4670e9c3147d8812edffdd36774f97",
".git/objects/23/28ac9a294332653745bcb03206d694e8455098": "f48cba9dc320087841b32e1175a81051",
".git/objects/26/ef9c9794cb9bdf993b3c26c219200d4a559f5c": "f53ae875a4a246953e39dd326e4a5010",
".git/objects/27/5c950748cef39cf5d61267269dc2ff8f8c20c5": "316e73313d8395341b8f9dd608bc126e",
".git/objects/27/7dadd9ab29e4ed8b6d3ecec3a169cccf22dd69": "4f7c8753f8d337c4e7aa6222d331a535",
".git/objects/28/8a7ce76635dd359946f0bada081196a35fd4ee": "0dead34497d7dd298860292c8dac37de",
".git/objects/2a/3f14259524cad6580ed7c79af1f343c3b62bb2": "d5b401931ab8f317fa539257b5b03c4c",
".git/objects/2e/2474961dac6f5a213cee7e16b5992d6ca74901": "4cda212941d4b12eb2883c5996ca6473",
".git/objects/2f/f9923210ae161ef0e64dd22dc8c660554d5973": "a141f7323385612c44e7cffe881f87e2",
".git/objects/30/1cd2d5280818534099e3cb50647fd0cb6533e3": "ce78407af66154ddbf08ed8bb91657b2",
".git/objects/31/4a5190968f9eda443d5a0282248ad4d26275da": "cafec9ce4260c53df2555528d0098182",
".git/objects/32/1b43e5aced92ebb66d7527c0e07e982ab79eab": "80f7cdcd4d77f63f28ae76737be5a0bd",
".git/objects/32/28967b7d4778b824e908fb7dea99c6cf2378f1": "4c78a58d063dba11e41bdf6746b2f742",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/4cacbedec65a46411429a7cebd0252a90c81aa": "cdf58a475f8da9f735cadbd503110b62",
".git/objects/33/fb1200cd1beceb22353c095fd47dfcf4f8dd89": "0626fd4e41edbbeab0901d98e19cb88c",
".git/objects/34/32960c420149dd158de687a9a60268875a56ad": "a30d0325af13dc7378e0d95577a18377",
".git/objects/34/83ce1fbc55b05b8b11099b49fb425300382f37": "b9b2a69aa2e5fac3d92de8c573174bd7",
".git/objects/34/a00605dc2227e2d7cf796c9c4bcfe47368ca8c": "ab66f8ed2f0e64e24c74deafcdf9480c",
".git/objects/35/09f7ead7e52c7d3f1d5db72e82bd8282f1bd82": "faeae079852330ea55000fef4ef163b2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/d0f41344a84c376511bcd8ac7e860c0b5cdf18": "72be3184de0069913afbbe04121eb464",
".git/objects/36/5482eb46eb32e07713f1e9ff80c86619a6f2bf": "a2392c3afc96227f70ad70050534bfbb",
".git/objects/37/348716277255eb723180ffb39def23c657cc6b": "155585f7f99ed678e6bd12c403b03a26",
".git/objects/37/8c05356b802fe4e6a29a36aa929746b958eef9": "f40561bfe934d026f6416ab7ec95fecb",
".git/objects/37/df3a88784442a8659bac4b320bdf10e36efd3e": "e571e5dddc86f94b4d26601feedce384",
".git/objects/3b/0b567e8fc218a9d71eb403590842c2c887b5b3": "1dfaddb77cbff96cdb293b82440e21c0",
".git/objects/3c/dc03a8fb66e2e559755105f54d441e9779683f": "c2041915ebdada72ca5f8f94b05575da",
".git/objects/3d/349cc9baddccd0a879c9ed4918befce26cc838": "c87c5e527fef4e07f30d0f4cda095694",
".git/objects/3d/dfe72a29fa0f29041c3d780039d10fc1fce10e": "77a1bc24b9e0565118f1d29920ba74fa",
".git/objects/3f/521248063f248b64c74998b9edefcd8d429336": "913fbf0422e9a4d87551811ab8c9c24d",
".git/objects/3f/5abd7e2a175fb51ab0c63f68a31dfa4494e001": "523679d7eea788fbf870e0a25aec6f36",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/08145bb2f3a98d175a7068be93132b9784b63f": "9ac6f21516566bf820a21285d6dbd8f9",
".git/objects/42/5512a789cef986f3fd896c1b7cd7c220aae933": "ae00ba252fadbb39c040c17a9593e952",
".git/objects/43/76b64242d39bb14b30d5a5eacfd430e5d5d31d": "4e7f40106d9780091cc0524e295f8e64",
".git/objects/45/55e29d87fc8c52113de4c3926b16b300f49a80": "05630a09fcf022d6c57deb0135ba9df6",
".git/objects/45/7fdfd41ca40d2d886d590495c1284cb3c9a19a": "cdba3089f7525adadd658308c4b46963",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ba0e0933802ce827c52ac702e18c0e02845f07": "1f44c791af720e95983a6ff36cd047a1",
".git/objects/4a/9f4642524b04ea8f6ecb7e041844619e2070a5": "b7116afb003a4fc28026b61c0c3c6732",
".git/objects/4a/b5cb87995cf79eb0cffb119abc30f6d939e497": "02a122193685de73be2042e3b963bcd7",
".git/objects/4a/e2338494d2ac339d26af4e7e7077a309ba6d12": "cf8cfac82cf9d8c9bbf9adda9ed230ab",
".git/objects/4a/fedf7fac204f929aa02fb04c24ab3c09910625": "9b4293e2c6ba577e9c8701c61a6c8ee2",
".git/objects/4b/4b2ee921e4d87239143682318bfae0703952c5": "bb9222d22ad4dd9219c180142906be04",
".git/objects/4b/f320fcdc74868c1b81575de6ee33551114c210": "c740a0eb8aada7504c321f4c60b8730d",
".git/objects/4c/e459a0af34a9d9c5093c6eaf79993529c61c41": "4b09c1279ba36a3c2a02b89e061f03ff",
".git/objects/4d/57c974485b2d6f88d2212bf19c983d4676b51c": "c23dcf5df28151ebe3bb4c651fd6bc89",
".git/objects/4d/90b78f2b0dd4e4e43a3be10e4e79bb7debd562": "fcaafb1d1a5660b80090f46a5ef425c3",
".git/objects/4e/dccf4a5eeb6edea27148c697698f8d1175edad": "00c842fe3758087851a3ad98c03795e8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/8dc8188e37daebabbb00ba9614a3bf9877eaf5": "929aa2c04ddbfc7c0c446a3805cf9bce",
".git/objects/57/c5a8a2c1fc54e0c576000c9294459d39e95274": "e8ab5cb8b27c45a6a1347cab83c4f071",
".git/objects/59/08786e4f625abf1a2c08388e38c8fccaf1f18b": "bf03e41ba59580a6a162a8b7d12c44c7",
".git/objects/59/4114b7e0f32ed79246592ee4392b6792249ecd": "bad07f9a19d56db888fbbb51e3058aaf",
".git/objects/5a/34639cb4793be92f3d8ae30b0a9cce227c9676": "e39d76a11c0e99ec8a6bf52a5c7156cd",
".git/objects/5a/ec811605cbddd2ac23232967a169fb6693743a": "6f4681d5dda1748287a06c47611e8771",
".git/objects/5c/b212066814ce0e14144367df8a15529f0154e6": "0899029fa5c8dff7411ed8a56bfeecd2",
".git/objects/5e/66c64e463db336c73426fc9de5e61edcedc2df": "e8dc6b2a0130c57e3e1d33c982000010",
".git/objects/5e/acca05b20361f744e425e99e8fcf28bfe4f4ba": "9ad7170745d97b23bf8c633cc0b632c2",
".git/objects/5f/9ed6e2210f905d4af529d072d8e2c0d063dd37": "f0e99b48395fe2f0714f1f8ad729178c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/f763d6df962277d0426c3b81977c153ddea2a1": "1951d1fc2669697e3480ea61273c1ee0",
".git/objects/62/5e60a674d634b1d9999abf96daf11d617d9180": "7a710262fbc1babc37ba59ee471e24ad",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/954766eb33de54b110f60d4c993cecc209d26c": "c13ba1f4a3b40b18410717c683886e97",
".git/objects/66/3dfe76d7084c271b44d91358aa4520d61ced09": "7e1d98e8bb9fc22933204f0d559183a6",
".git/objects/66/97c1113830f39977fd06db0b238ff1a527e40e": "824a0e2186aec2ebc4adbb9384760ef4",
".git/objects/66/a81e188913bb6e6e1277bb52089fe229fdb714": "6f82a4c48b66818d32dbb1c6c0424a9f",
".git/objects/69/35e0b9651da52c5e550d4f6bfa56d7fd54ab90": "d08f57a2dcf403f4e194bd07da34719d",
".git/objects/6a/32b7e5fda5055a1a666f3ef26aa4f8b3273772": "d05199dd4c9b03b289ac06e73a1fd09f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/27437586c2a6ce039ae47ac540c8a7adf036fd": "714e00ff2c58ba2425005e739d477407",
".git/objects/6c/4262772f06aaf3ba83ef1651cb35b27b06b6fd": "3a3b776613381bc043db6ae6b374d88d",
".git/objects/6d/d9c9177f656c23356ba628b764d1b1aed7bae7": "7f0f3013b6de03a7d95626fa3fc650c4",
".git/objects/70/f780efdfcf3f9c51d9df3ab997ce8d7b311792": "2dfa6f042bcab9be3b796676e1c13a73",
".git/objects/72/440e9d6acb6ff1fc86e864b83e7cfe642d3556": "de2295248d45634db878b9302ad58a41",
".git/objects/74/0efb9dc9d8098d35ab9900dfeae4fabf5601ff": "1f64885ada3d6df41204403cb4b57fcf",
".git/objects/77/20d1d5a199c827d62ef51bbef570d6f8142a14": "147a447589df1429cc93d9cf4f92998b",
".git/objects/77/5d33b48253206d89ef529ed4d72ab8e4602124": "ad0f06d2acc22aca4269fa97582cc745",
".git/objects/79/3713312e3e57977173386d817e8b6caa197d35": "d14a90bbdf692536e1d3a42e58845554",
".git/objects/79/b827b62d0ec434f239fd74aa8ff5cf72b2508e": "81e7f9fbdc564a86b7fef330aeffb6bc",
".git/objects/7a/09927b00158f577b16b4ec0ef4c856550f8128": "c8b5c48284696a6804342b2501b61a52",
".git/objects/7a/1a8616babecd3c14cdc8ecd3e933a64126a861": "32f5aba2b762f436ad370ce7910b174c",
".git/objects/7a/61ce060f601250ead8bb2d990795e67fd8f66c": "eb955c4dc6d3a9b079ac7426e21cb6d1",
".git/objects/7a/96529d4d29c204ead39908d699e97f1afd75cf": "ffce964614fa6f46b3a3eddf622a7101",
".git/objects/7c/6c197510648fef9a52ad6276b0ff00a841dd0a": "7dcff3078c7538f962339d5064783fb7",
".git/objects/7d/8eb9e9f9c5bf355b66302740b1f4fb5895f537": "69a125449c0ef59ec490267de370c588",
".git/objects/7d/fad9749af3cbcbb5dc8b7fe16b350ce2cf8fde": "6f80b641ca35989b7dc5d7baf6bc9bf3",
".git/objects/7e/e8b03ebfd74dcd5b840f542fe9294a2934f15d": "6dfa5d6d197f078c8f00f93b2de3651d",
".git/objects/80/96b544ff6f2d343fd1001c755f2a61958810df": "7c0a63eeb7e2024d18846995a4ba63a5",
".git/objects/82/8706ff92c23980f7deed87b6b71ac226964179": "ced00a104f534c5a664603f5dc3b6271",
".git/objects/85/74a147e5ab8d6bd92b53ba0ce6192f56fdcb4b": "b6cc2e57b5917d7ac78a317a7af4809e",
".git/objects/86/8c9f8a3e17aaa8522301ca5ee7d4c5c44e18f3": "005d0358487d47e581e1555431592acc",
".git/objects/86/b0a8809cb0765ea434903e40ce13a258c173fb": "c4a14af905eb0a6365dd571f197290be",
".git/objects/87/48de106c971a0121e9904779ea152d57402c71": "7254678a38f2aaf15012b13faf4935a3",
".git/objects/89/75d4b664a241e5fb135b93eeceaf1d84395a84": "e1fd3e4a1bcb998fef756c71c298b3b7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/9529681038ec8d2d33582a8ad6a83389f0df70": "5bfc1087b920d0bb0f15b1f9bc12fe8a",
".git/objects/8c/49d87f1807357bcfa8a511903edac08f0ad14c": "0074fd4b0522ebdbc90714c5aa2d987d",
".git/objects/8d/43d366b7115aa797289fd41bb33c368e83163f": "46641480247f0ae409c9e6006365123d",
".git/objects/8e/19762e7eae082464c0ae136f96c604fa643cab": "85086a1ef9831ed54f13a83aebc3ba48",
".git/objects/8f/1094b31a3a860a903e5cf481b8103e2a54f511": "eef45d60701a4d604e4e4ed19b2caa82",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/68eb643ab73cbeb14e08f80cb29f3109629590": "708ed03d763e08acc651a2c1a8c95bea",
".git/objects/91/de50ec549ab6d41c67277182336ed05c07f40e": "3c81a8e2bb140ed423f8136977d2a61c",
".git/objects/92/f6ea0f534f0c662a1072d7db07ecf153477799": "dc1cda290d24f29bace9d0b198ad9a54",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/3a7dbc9b89dffa5da5857b18066edae1f90ed8": "9dc1d501d4910a5dd35790d2ad75c35b",
".git/objects/96/977bcfbd521a51b9aa8cebc06963892d975aa5": "6ec61251dc3b571a00cfc5051b154114",
".git/objects/98/8d649081a7a7f654cf81f087c44da7a5ec083d": "945b55bbef120387d57c2f2dc41cd567",
".git/objects/99/282a06b4e93797c162bcd21ed12b613eed6b3c": "4d69639a0088d6118b18f74f82200e5f",
".git/objects/99/ec096f159e6989286115e456c3204418e83bef": "5fd38400fd1f958c72a23f236fb7be9f",
".git/objects/99/f3b9fdd67b3ba774e61f80bf6d3c72b905c7e5": "0af5d149c08c5dde2fe4427f828d1c8f",
".git/objects/9c/96f93e5358db18c573883f632fbf496a2cbbc1": "be26ee2f1ef77cbf6264903a8499a682",
".git/objects/9c/b5469bc4d19eb3cee8403aa1be9155eaffe2a1": "3135644627090c4274a7dc6397bcf9ea",
".git/objects/9d/83f961310906b3f83a32098c93b0fa037e82b6": "c9338e18852c3ffaff930f75d11a5c8b",
".git/objects/9d/8e1a11877bef43d36f858589f0541b315a43a3": "e9bb2ccf0800e5711ffb7a158225e719",
".git/objects/9d/9913e4758b10e30305709fa2f841d81e2c0c46": "a73a7bc6bd6ba4ae46bc1f92deb4718b",
".git/objects/9d/ed026cbcd17b8f6322a7406d62133def106fc9": "d51c6890a09993417521a7e4a84db3fa",
".git/objects/9e/1039b645a375d0278f03e9a5efa8ee4be0afb6": "b034d31935bd6e20986c8674655917d2",
".git/objects/9e/693aa80a6d2a6d3836a942ddcc933c2026d527": "28630ee205fa3efcb7cb355318a5f391",
".git/objects/a0/d501eec99f940649e6120c4acf608bbe5a3d0c": "f3c16f11941cb07c2abe924f63257315",
".git/objects/a1/d1beaa567ae352b96eeb4e318221622545e5fc": "42d729e48729166769ad941fc6e699c8",
".git/objects/a3/b148e415bda7088d61704dfb41ff8039770ffb": "5a18850ef0bc894051a37af60afaaaa7",
".git/objects/a5/1f5e6caf82c4c40f008f7011fe8dde173ed3f3": "6a5283830a69c0138813a9b9866f7c72",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/2e5dd540eee330ff0df5309f3884649d6d294c": "5cea1d0e5f58c8b5c88abd77f3f5db7f",
".git/objects/a8/14b7cc6d8041403e53a90673811c396c53f8c9": "494ed804112daefd571d30773bd2735c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a79eb1a44b5fee30862bdb54945f4925bc29d9": "b4a0eb29a26a084bc053f3d543d944cb",
".git/objects/a9/b1b20996f3601a0b085504045253d5c797c602": "527518f10a1f12b0b507415b601d306c",
".git/objects/ad/e4971bccdc1ac8965dde88651f6f6d30772add": "6d8069da43a5c2cff0e804775f99a611",
".git/objects/ae/4c0d81d233e06a53f4afb99f45b19054f8e1aa": "d239fc56acc579df735cfd52570f53a2",
".git/objects/af/aa330fd1d2eed28d1bfd8bbc99d685ea80c1b2": "f4546d21b5709d3623b13ab27c09d80c",
".git/objects/b0/b4f9056a1051f265413096f06a73bb512073d4": "f32fc873e89817de40bb805c25d76a31",
".git/objects/b1/1aeeab79ce933a9cfb16803bfd95ce77e70bd6": "c331712cba28d635a4e6d95621ecff63",
".git/objects/b2/1991be50ea1d53735f0c32d0f14c5f839864a5": "8fa1e14b74e819c16bf9feed873b38d6",
".git/objects/b4/96f165506e97d54e06ac24c93cc3bb9e841d99": "955e47e32e0a27aeebee57759fa83a7a",
".git/objects/b8/86c0b75cdbcb9000f5dadf713c6d21446b88c1": "3defc7ae651fd1a509d2641451cf6dd5",
".git/objects/bb/0bc3e7392f488b1ccc851d4392deace4f8117b": "a75c8fe52b170b53d5aa99a1f4b42955",
".git/objects/c1/5f510ea7bc563dae39b5208cb7bd632b915685": "b81ef3ab491acdac12b646de297af7f8",
".git/objects/c2/124ff9f38ca5e35e0ddeb0b72ef424d95bb6d8": "b8e55594b33e7ae3f1c23a2259d33993",
".git/objects/c2/af9de6a39d6f176f56288d959a06bd2f81b40c": "bd46a286dbfcc832fe0179b8d4e02f1b",
".git/objects/c4/bfaee27b717859389e4ae22df24d571e29e7c4": "ec4dd3e000f0bca616f0a743f9179a61",
".git/objects/c4/d3d7c8ffd425f788454c8557fed813a7533326": "ce61345aef372a628a3dfaaf8692ccb0",
".git/objects/c6/8e7346ad984de6219d1839523cb93e341977d8": "205ef50c18c25e4d46d5531bfddbb052",
".git/objects/ca/fdb63c8ec475962a656b7a92c51ed2ee934933": "d5301aaa57fa82e7d1e78931291636f1",
".git/objects/cb/7e8f888e0224938a83eed292483a76f46ea894": "2b0a59bdd59b5ce33331394619b5418b",
".git/objects/cb/f1a577893b725de57aa6ad6b122dd5da53ee90": "82b69269aec0009cb28abc182a769b4d",
".git/objects/d2/59ed78304d3c8970ce5011818e9883d02897cc": "f8c9a50cab3a5111c1a13cc1efde11ab",
".git/objects/d4/1d7255c889783749c35f898edf3474a0df2d30": "6c5519b796165e02dfa79760e2e5a055",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/79e914ff14c360d66b9678ea6c626a1c4041b0": "b0fb4682c2bcb29437f88d9b09432fea",
".git/objects/d5/347ce5061d02a28bdfc1ec957a2d87bf00a3a4": "9d2bd39ee3a2e65ad94c58fab5bb26cd",
".git/objects/d6/09457fe4f030753a823b246cc562640fdd1b14": "992f10773351d0cd9d347d24815c7251",
".git/objects/d7/2b648f79932076c5231d6d5e1a04117484d8ef": "94909308d871dcf188f63dd6c7ef0c4c",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/a80ec209f16a9629c019a89cda7c2e8baad196": "14c634f579ae1c3ba72ef22c114b1550",
".git/objects/db/07bc3596994063879592e27231f4e27d784d83": "288b42be26fe19aac223780735f641b7",
".git/objects/db/5e0ec03c9af9fd51fe317163441ca6b2a3b17d": "4d36125ac9f16ef1104291b379d09a88",
".git/objects/dc/95e41157d3532143329f99a37f8ee869f1af8e": "d7656a71c50872336524c169bdbd6d09",
".git/objects/dc/9ef9665b9c99bb1781449d2653a1c1120d4cbd": "f407a7e63aff20b9f2e9b11ee5742495",
".git/objects/dd/4e7b58b94e14085c36de980e769f669e93e1f1": "c3c20ddf7ecb232da8d23e6dff5b85c4",
".git/objects/de/8a4587fcd387ea58d2e2208cfefc68e7a01d7a": "7f040133f901512b35c1d2e955e97576",
".git/objects/df/712cfe2534571d3b2e29c301c73d8003e4b2bf": "2462c1571778d1b472cc0b8cbf514637",
".git/objects/e3/5627934e7a2fabbcfef178bf9f4a42a2c6f861": "05e6a35e7dbf50f7f73409d807307278",
".git/objects/e3/9349959ed0ebeb7eadba7b86bbc0767c3ab4f8": "fc0680d23c98551422ac71ab8b4e5e5f",
".git/objects/e4/f4629f4dae547176ed5d9fef495676d7b6ae79": "7d5190e2c5369f67a70cb1a0fea1eae8",
".git/objects/e6/87d66e5d38c552e4d0eb0b87302c10549c8746": "7fa8463f0bc5ade910634deb456d4567",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/b731329598e87bdb0d5045427703abdabd7d2d": "dc2fcf78a1b396e47270e4edd30dca93",
".git/objects/e8/2f86b60bde6e782a02ae792b613be31e058feb": "ff928b36225123bcca82344d582b93c1",
".git/objects/e9/91866bec8be6fcf5a684eaf7302587155f9ac2": "b0441497887d353584604e9c29d96ab6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b8b915704ed78f6efda51cab29685a7dd708db": "2f7a0e10e9bad66b56be17e109a5df74",
".git/objects/ea/e46f4befbfc1dea6b2ae4f60a250db0093fbe4": "36b4b9402e69f304dd0b39e73061af59",
".git/objects/eb/cf37808fefc9ef3e238d69475a7aeaf4f58851": "8127e0db055546a439da8861d285bf33",
".git/objects/ed/3527cb0aa13eb91ec0b8bf9f3f96d1faa0521d": "6d594d4f836cf55dcf1e2bace447031f",
".git/objects/ee/feb94f383152aa447d4fe4b4bec932b8f43b62": "f85f32bfb82b726105047a2d27755704",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/843053b778aa61d518485d8cbfd1a4ca75e747": "3467f65ed37aed8b17a61f645697d199",
".git/objects/f0/972d38fc881f33e9cfd5eca37f08b2c49b5b3a": "d5061c77552fb5001dd6ec3679ad504e",
".git/objects/f0/97b450fdf8fe5c00fc4920c2c0e115f67cc10b": "41a5539bf9611b722bbe89f8f7269acf",
".git/objects/f1/2aa259f435386f6e50977fd46afaf85cf69306": "3a19243197a636f7e31843db88291f78",
".git/objects/f1/b784f607e160c73af0e297a634fc6c60538303": "40f8e0a384315ae62fe20bfc0865e29c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/a49ea79904de9036e57e2047b6c83a454d4855": "396a0b33299006e123a23d8c7e15814a",
".git/objects/f5/61fdb5046429700c3ce994ccfa3a298357fd09": "91d6cb90accade3e62985fcce1c2bade",
".git/objects/f5/6c4fef328ccfab701b4fb7525751b64540e846": "b4b00e64a96c353ded0091f5961f54bc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/4e187354f49cfa803569b88fcf20faf4a29c13": "f78dca1aac28639e5a9a75221505af04",
".git/objects/fb/97e33a6dce21d38300355182edcfdfe0158eea": "492c290504cbcb3e394bade04272e9cf",
".git/objects/fc/72fd70151800c9988fbea26293f158935833c4": "e479aa015316c572fd8861dd72b4002b",
".git/objects/ff/e2a4e1397d356e43a4eadd912cd3dd549628e3": "ab0c5fe878dad8d51c24988485ffd768",
".git/refs/heads/gh-pages": "d5bdb892d5ec3be3cd8b8d51aef54b37",
".git/refs/heads/main": "8d99aa16137e7ea6c9cace33d464830b",
".git/refs/remotes/origin/gh-pages": "d5bdb892d5ec3be3cd8b8d51aef54b37",
".git/refs/remotes/origin/main": "708142e20ee7a5f9736a03daf00d5f81",
"assets/AssetManifest.bin": "d037f953c70a7ebf314be06f3abea558",
"assets/AssetManifest.bin.json": "27dd055fdc9e9ca112efd7bd0611b725",
"assets/AssetManifest.json": "da41fb6e51c515ac0f0adb92a4a66b82",
"assets/assets/audio/bleep.mp3": "3c8672b8034ec19e8475a6f4b2e7ca0c",
"assets/assets/audio/getready.mp3": "e6790c53b53440e93f45804c061ca92f",
"assets/assets/audio/takeabreak.mp3": "9dd5fc254b737dd5005b82ca192bc831",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8bd2beca5c60cbc6968fc8b3d6110079",
"assets/images/app%2520bar/boy.webp": "da4a611fbf0a67de0a325f1979e3f8a6",
"assets/images/app%2520bar/girl.webp": "0c33d2bb3599139d5bed164f60b5e585",
"assets/images/discovery/belly%2520fat%2520girl.webp": "1810bc3baecd30a1760efc5800aafabc",
"assets/images/discovery/belly%2520fat.webp": "09d68a42530f59ba486cb7d81c9a10dd",
"assets/images/discovery/butt%2520workout.webp": "1fba56b3f55f0fb1c591d6c98143d2b6",
"assets/images/discovery/chest%2520and%2520biceps.webp": "e13e306aa9cd8cc3a1476c487f3521af",
"assets/images/discovery/home%2520boy.webp": "a1f5fe63dbb01772f38e06d9f5de8067",
"assets/images/discovery/home%2520girl.webp": "98fe1b998e49358963b2c51b75569a42",
"assets/images/discovery/nutrition.webp": "e282a24f6de53bd1f75c184928356b1c",
"assets/images/discovery/quick%2520pump.webp": "e87e85e22470b7f5b2514359573cfa41",
"assets/images/discovery/skin%2520care.webp": "8a318e56c60e66213d25c748893e897b",
"assets/images/discovery/weight%2520gain.webp": "f3c8e0269068f5af9145d4dc1f96e76f",
"assets/images/First%2520three/full%2520body/boy.webp": "e223454798fb0236c7bbc331d69febda",
"assets/images/First%2520three/full%2520body/girl.webp": "c4028f07830b5e594a3a7b9280f3daf2",
"assets/images/First%2520three/weight%2520loss/boy.webp": "c0ae67056eb241e274e94b83ba2e4fa7",
"assets/images/First%2520three/weight%2520loss/girl.webp": "10a9ec17525c7fa516411d945234a255",
"assets/images/gym/gym.webp": "dc37419fdfb68ed0bad9aa105eb6ac4f",
"assets/images/home%2520workout/boy/abs.webp": "befbe3969b7fcb65587602f9526f2785",
"assets/images/home%2520workout/boy/arm.webp": "e7c00385d3887611e21589ba381e7e5b",
"assets/images/home%2520workout/boy/back%2520and%2520shoulder.webp": "29f5552fd39c407eadceecf86f1e8efe",
"assets/images/home%2520workout/boy/chest.webp": "1bb388b6da6166ffbfc6b51592cf0a01",
"assets/images/home%2520workout/boy/leg.webp": "a25806c433debaeeb89cfd9b60266d1b",
"assets/images/home%2520workout/boy.webp": "39fb9d89d4b29d2fa721afd99cfc0a42",
"assets/images/home%2520workout/girl/abs.webp": "42148b7115492a0c02a0ab8e88955f93",
"assets/images/home%2520workout/girl/arm.webp": "35043cb11efba7447603d3892166220c",
"assets/images/home%2520workout/girl/back%2520and%2520shoulder.webp": "96c53dbb64b3d92b0c7b09a0817431c6",
"assets/images/home%2520workout/girl/chest.webp": "40eeaf0a2bfa1410caaf6bf9e49174a9",
"assets/images/home%2520workout/girl/leg.webp": "17a3ea4ab4a733f6148479d9ea03a7cd",
"assets/images/home%2520workout/girl.webp": "be71b1fae9b6a3376827da7bd049e305",
"assets/images/intro/intro%25201.webp": "f15ca9477c5e93b58f12194aef27c216",
"assets/images/intro/intro%25202.webp": "1a3ef46bd286d7e5f6c71adf2d88cd0f",
"assets/images/intro/intro%25203.webp": "a840ba9b8a70a19430c27cced6c89ecc",
"assets/images/logo.png": "4e8a9b37f71e370f23ca20e5750be32d",
"assets/images/starting/1.jpg": "ed4bc5a3ec0a593c32c579ab1ed15182",
"assets/images/starting/2.jpg": "5aca6a2bc8639f1e77dee2faf8338376",
"assets/images/workouts/archer-push-up.webp": "db7480d496b0b5aab4a38febbd5555ec",
"assets/images/workouts/arm-circles.webp": "e2c32d4b1d27ae980018c3866029df1f",
"assets/images/workouts/Bent-Over-Dumbbell-Row.webp": "7f0624570e9cc686533627fc02bbb3f3",
"assets/images/workouts/Biceps-Leg-Concentration-Curl.webp": "aff38d837d2bbceef22c9da9a4c99785",
"assets/images/workouts/box-jumps.webp": "a6a80bd7f78e2d591814d5e845656c05",
"assets/images/workouts/Bulgarian-Jump-Squat.webp": "fbc3165b6d36382f5adc0d9eaa3aea50",
"assets/images/workouts/Burpees.webp": "8f7e683fbf34dc82b4e404ac09397b5d",
"assets/images/workouts/butt-kicks.webp": "3b2fd132f968fbe9fd99f7810170459a",
"assets/images/workouts/calf-raises.webp": "16bfd7aedf84b101872a9b1cb1cf6639",
"assets/images/workouts/Clapping%2520Push-Ups.webp": "5a8f13581242112e7490e79ed65b23de",
"assets/images/workouts/Close-Grip-Dumbbell-Press.webp": "70bceae910f7dadacdfb8a8d3030939b",
"assets/images/workouts/concentration-curl.webp": "2464248d9e4e5f5f9e0f4943b39c3430",
"assets/images/workouts/Cossack-Squat.webp": "f3793b8025076dcac5a7996fdbe9f087",
"assets/images/workouts/Cross%2520Crunch.webp": "9f6d18d13eccef977a4dd51531920a29",
"assets/images/workouts/crunches.webp": "143493ab2d106a35c03a5a88794ff61b",
"assets/images/workouts/db-bench-press.webp": "65bafa2306ef9f80fc2b480260ee7d9c",
"assets/images/workouts/db-bicep-curl.webp": "f9a651022a542110528264b6cbcb054f",
"assets/images/workouts/db-pullover.webp": "3b2fd132f968fbe9fd99f7810170459a",
"assets/images/workouts/db-shoulder.webp": "c551ee8b7f1868d1936c7eb03434f729",
"assets/images/workouts/db-triceps-ext.webp": "e66ec21b504884a2ac3822dcf0b34623",
"assets/images/workouts/decline-push-up.webp": "78ba41a54a2a7ec6d5012b9c37813f91",
"assets/images/workouts/diamond-push-up.webp": "85931343277345340b48487266a90e19",
"assets/images/workouts/Dumbbell-Fly.webp": "6dc0fb74153dac26d764285f03af7ae5",
"assets/images/workouts/Dumbbell-High-Curl.webp": "aff38d837d2bbceef22c9da9a4c99785",
"assets/images/workouts/gdonkey_kicks.webp": "c4af47ea423f441bedad108e1f7b00c3",
"assets/images/workouts/gglute_bridge.webp": "fbf00ec1768a65950ad890bb6cb1dbe1",
"assets/images/workouts/glute-bridge.webp": "8566a165cf022f6c821eb247813566ad",
"assets/images/workouts/gside_lunges.webp": "5b2b866f136799df8c0dab4ac79b7810",
"assets/images/workouts/gsquats.webp": "302e4edcd5b21e85f08f375856c98c3d",
"assets/images/workouts/hammer-curl.webp": "4d7e7c7f33f900696605255c0229509a",
"assets/images/workouts/handstand-push-up.webp": "9cd38c3e224e0ad88fd03cfdfd6a1fcd",
"assets/images/workouts/high-knees.webp": "fabd73ae42f617145b0e33977c95fc79",
"assets/images/workouts/hollow%2520hold.webp": "aff38d837d2bbceef22c9da9a4c99785",
"assets/images/workouts/incline-push-up.webp": "5f13780557e2e58d8830c946eebaef9b",
"assets/images/workouts/jog-in-place.webp": "460d991e4d3f75e480841542ed90b41b",
"assets/images/workouts/jump-squats.webp": "3db8a4448c09f11d2f3d9ba741fed1e9",
"assets/images/workouts/jumping-jack.webp": "92193e87a57f98238c97b7e7b8f49fbd",
"assets/images/workouts/knee-push-up.webp": "aff38d837d2bbceef22c9da9a4c99785",
"assets/images/workouts/lean-planche.webp": "0662d23317ca66ae6df43716817fdc59",
"assets/images/workouts/lunges.webp": "facdbfc5cefe3d61cc8e226572a1b3d0",
"assets/images/workouts/Modified-Hindu-Push-up.webp": "05e8157d03495f47935746fc8e72470e",
"assets/images/workouts/pike-push-up.webp": "3c17e47796dd767c22873271f3ae666c",
"assets/images/workouts/pistol-squats.webp": "3b2fd132f968fbe9fd99f7810170459a",
"assets/images/workouts/plank.webp": "304f7ecb595bd0ddd5dc931a946253bf",
"assets/images/workouts/power-lunge.webp": "cc65d8c540fe9d42cc375ed72986c09c",
"assets/images/workouts/pseudo-planche-push-up.webp": "898c2639894be8e88d43533807139d5f",
"assets/images/workouts/push-up.webp": "6c8e42871f536120221fef4a6e104312",
"assets/images/workouts/Reverse-Lunge-Knee.webp": "37ce5744360e8de0f43a97ae32d5c4dc",
"assets/images/workouts/russian-twists.webp": "aff38d837d2bbceef22c9da9a4c99785",
"assets/images/workouts/shadow-boxing.webp": "e8f638fb51975c78071905a883a8b08d",
"assets/images/workouts/side-plank.webp": "cdb269308663a6e3660186bbdb147bf4",
"assets/images/workouts/Skip-Jump-Rope.webp": "99c4d055c307524a71eabfc68175420a",
"assets/images/workouts/squats.webp": "be0d5c2a876b7538d7a32f61dc3d4b1c",
"assets/images/workouts/triceps-dips.webp": "2e8f17c5a559c3993b590b7634aaaf07",
"assets/images/workouts/Tuck-Crunch.webp": "b69768e333e83528479f9524a2db4554",
"assets/images/workouts/wall-push-up.webp": "20c8990b41ee753fde3d1b98969b1cf7",
"assets/images/workouts/wall-sit.webp": "6bfc1ebc1e71fb20a0ee34d198913df5",
"assets/images/workouts/wide-push-up.webp": "df4d3f44fb2d009035ddccff4e3c7c0e",
"assets/NOTICES": "8bd0d911b11cb4cc9e270c8e4a2535d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "034e1c31308bc27f9d06437909d8339a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7087e5f4b9099026c7f8760559e469da",
"git": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "034e1c31308bc27f9d06437909d8339a",
"icons/Icon-512.png": "034e1c31308bc27f9d06437909d8339a",
"index.html": "dc62c54804bb627f06c51146f9f22095",
"/": "dc62c54804bb627f06c51146f9f22095",
"main.dart.js": "500fe9747ffe5399476ef3d5a4477a0b",
"manifest.json": "ede2762cc5d9dc1d2d3fdcd729a3410f",
"version.json": "fde96cb896097e538878ed3f1e480f71"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
