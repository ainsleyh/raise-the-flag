import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class History extends Component {

  constructor(props) {
    super(props);
    console.log(props.navigation);
    this.state = { navigation: props.navigate };
  }

  _getRecentImg() {
    return (
        <Image
            resizeMode={'cover'}
            style={{ width: 40, height: 40, }}
            source={{
             uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR4Xu2dCbi21diGLzJGhpIQCZEhlaFQ5gyZQ4UUUspcZCo0kXn6M/xkSObMIlJJSvwpswypNJiaiFCG8h/n19pf+/vae7/3Ws96pve97uN4jx3fGq+1nutZz73u4WqyGAEjMLMIXG1mZ+6JGwEjIBOAN4ERmGEETAAzvPieuhEwAXgPGIEZRsAEMMOL76kbAROA94ARmGEETAAzvPieuhEwAXgPGIEZRsAEMMOL76kbAROA9wAIsA9WlXTj9LuBpGvN+11TEr//SPpX+v1z3t+LJF0g6a+S/mtIx4OACWA8a1U6UtZ4TUl3lLSupFut9FsrPfQ84E0FgvhTIgMI4WxJv5F05ry/5yQiadqX61dAwARQAcQBNbGapLtJuoeku0i6U3rwVx/QGCGJX0j6qaSfzPv93qeH7lfJBNA95rV6vHp6yB8gaZP04y0/1jU9X9J3JJ2Qft+XxGeGpUUExrpZWoRksE2zVneW9GBJD5TEg7/GYEfbfGA8/CdLOkbS1yR9T9JlzZt1C/MRMAEMez9cOz3sj5H0aEm3HvZwWx3dnyUdmcjg65L+2GpvM9K4CWB4C31dSY+S9GRJW0q63vCG2PuIuGk4XtKhkj4n6dzeRzTSAZgAhrFwaOAfIukpkraShDLPEkPgcknHJjL4jCROCpYgAiaAIFAtFbudpJ0l7SiJ6zhLMwQulfRZSe9PJwTbJEzA0wTQbMOV1MbA5gmSnpUUeiVtuM5kBH4l6QOSDpHEDYNlAQRMAN1tC+7id5X0Akk3767bme+JUwEk8HZJkIJlHgImgPa3A8f83SU9M5nbtt9jvIcLJWGZhxKNb+f5v39I+ncy9+UvBjyrJPNgbic4yfAXJSXXkTdJf/nvm0paO5WPj6b9kodJeoukb9vo6AqwTQDtbbrbS3qVpO0lYbTTl5wl6Zfzfr9OJrq/lXRJi4O6RiIBzI9vk37rS9pQEn/7xORESfuka8WZ1hOYAOo/AevNe/B5Y3YpPNwYz/DDku6HyUGnyzFE+uKqEzNlyACz5c0lbdQDKWB1+GpJ34wMehrLmADqrerNJO2fjvpdPfg/k/StdA12nKTz6k2n85a4+rxXIoP7S7pf8kDsYiAQAKc1TJFnSkwAzZcbN9o9JL28A6Md3G2xhjs8WcRNswHM9dMtCcZQj0iejM1Xa+kWPi3pZZL4bJoJMQGULzPY8X3/+vStW97S0jVxq8XAhfttlFf448+azPlBbCPpScnDsS0MuDVAUfgGSX9vq5OhtGsCKFsJXG3fI4mjahtycXrgP5WcYdDAW65AgD27gaRtJW0n6bYtAYN78kslfXKabwxMAHm7hysvlEYc+dFy1xbe8Biv8Laf+rdPBfC4ScAzEqMqjKu4mqwtOB49OwU1qd127+2ZAOJLgK0+D2dtjzze9h+U9L50VRcfkUvORwA7hB0kPUcSV7A1BZuIV0p657S5JJsAJm8TlFFvShtrcul4CUJlHSjpQwO9qovPZFglORXgPs0pjZuEmkJMAgy6TqnZaJ9tmQCWRp9v/IMrf2f+WNJrJX1h2t4mfW7kRfrmWhEi2Lqi0RuBStANvGsadAMmgIV3Du65+0l6RcWN84NkJ4A56kxbn/VAFERS2lcStwi1hChFeHGO+irWBHDV7bBO0vxuVmmn/DwRyVf84FdCtLwZrA0h9seVN7FCTbwMIQHsMkYpJoAVl42NwZGf+PhN5Q/pxgBPNF/jNUWzbv1NJb1D0n0qNfvGZEk4unU2AVyxAzDdPSBZ8zXdExiSYESCMYmv8pqi2V599j4RmHh4b1mhm2+k9kYVe8AEcMXb/hMp/l7TfcD3Pa6/aPgt40AA2w6Ueuh7cG9uIrhWP1HSSU0a6bLurBMAyqEvScKDr4mQ+YZAH3znW8aJALYDhBIj3HoTwVR7lxSEpEk7ndSdZQJ4WLK4axqAk+sg3h4+7neyZVvtBBsC7vn5fLthw55ek2IODPrGZ1YJgEU+qGHEmjPSZsEd1zJdCBCy7b2SHttwWh9LQV8Hm+Fo1giA+XIfvHfDhcVsFwMTv/UbAjng6uwVfAy4LSCASanwgnj8UMOVzxIB4LzDg8vbv1RIg72TpM+XNuB6o0OAfIsfl3T3BiPHFuShkvAwHJTMCgHgJcZxrIklGJ56T03x9Aa1iB5M6wiwf7gmfkmDnk6XtMXQgo3MAgFcJyn7SLdVKm9Nir7RGXqUTtj1FkSAK74PS8JBrES4JsSr9NSSym3UmXYC4I6Xaz6Yt0RwA+XIT2AOixEAAYKZ8gnIp0GJ4DsACRDPsXeZZgJAcYON9oMKUcaYhzx9Pyms72rTi8AN0kkA5V6JEOYNewN0A73KtBIAFl1fbGDd993kMDIqs85ed9LsdY7NAGbEpXoBfEWIV4BuoDeZRgLAlZe00aXsTGTYZ7ScNKO3BXfH1RF4booUVJLohOjDkAC6gV5k2giARfhoChZZAiiMvpckUk5bjEAUARTMvHTQOeUKyVwIPPPH3Io1yk8bARC6C8eOEqEeJqAWI1CCAC7GRxS6khMlipMA8SE7lWkigOeno1gugNhqk7UXRxCLEWiCAKnOjkrJUXPbIcIQpsedXjVPCwHwvf+5gvBdlyXjHo5vFiNQAwESnxIbgOzIuYL/ATqFzhyIpoEA7inpeEkY/OQIDz8BIci6YzECNREgGzL5BktCyJOa7M01B7NUW2MnABJykgk3l21R8mHWawOfhXfHvTOi5JDExHJVBG6XXkx4FuYKSU6IGt26jJkAuOs/RlJu8E6OV09LvgGtAzzSDnioMXuNyJj3UGR+TcoQcAZvQJKW5AjKQJSKv8ypVFJ2rIvHuPHsw10zV56X8vrl1pul8iaAequ9cfocuFFmk79I6dJbvRkYKwFgn0+arlzBo4s88JalETAB1N0hnFI5rebGHGQdSILamlJwjARAZlhSNOUGaSAF185tgll3z/TamgmgPvy4omNlmiutKgXHRgBYWvHw822VI0dKwlqr0zvWnAEOrKwJoJ0FwdgMY7UcYc9unvZ9Tr1Q2bERAFl0cyP6/EoSWm2i+VhiCJgAYjjlluJ5+99keJZT9zRJd5P0t5xKkbJjIoCSI9SfkyIFe2tLHAETQByr3JKEpuNEmuumzsuPT9iqMhYCWCulZF4jY/YY+jw8WWVlVHPRFEHJ14DtbYWbSvp+hq3F3EjIcozFazUZAwEwRnz7c0M0E6sf7z5LPgI+AeRjlluD1OXHSSLeYFQ40aL/quY5OAYCwGiHBJs5QoYeEn3arTcHtSvLmgDKcMutRQYh7FlyBNN1rgaryNAJAFNfrKFysrScnRQmf6qC0Gw2YgLoZt15/ohfgVl6jhCqjliXjWXoBEDSThx2osJ3P37VhPSylCNgAijHLrcmL7cfSVo3oyL5BfgU+EtGnQWLDpkASKSAtjRH9k/52HLquOxVETABdLsruOdHH5ATVgzX4ec0HeZQCQDXXqLxkrE1KngFYnL572gFl1sUARNA95tjv4KUddi3nNhkqEMlAHL3AUhULknf/Rj9WJojYAJojmFuC9gH8OlKfIuo/F966RX7CgyRAPDtx3Anx9af0Mxk77HUQcAEUAfH3FY2SvYBq2RU3D7lLsyocmXRIRLAwSksd3RCP0jWfrbzjyI2uZwJYDJGbZV4naQ9Mxr/nSTCkBVlqh4aAWDvjIVUdFzc828iCRKw1EPABFAPy9yWOPkSJThH//WaAv3BsnFFH7TcSZSUZywEU8yxkX6bpD1KOnOdJREwAfS7QUgbdmzGENCB3bbEQnBIBIDdPnHVo4I55B36iKUeHeCIy5kA+l884lU+KWMYB0raLaP8oE4AEBEaUOyjo7JjStAYLe9ycQRMAHGs2iq5jiRutaLRrv8lab3cNGNDOQE8QtJXM5A8Kfn429Y/A7SMoiaADLBaLJprG4BfwbNzxjMEAmAMGDOgzIsKBj82942ilV/OBJCPWRs1iIDFKSAa9p6bMD6LSW0fkiEQwCMlHR4a7RWFcA0uzfyb0c1MFzUBDGf5yVTN1XhUDsqJODQEAiCDygODs8PiifxrPwuWd7EyBEwAZbi1UQsLwVPSmz3S/qWS0B+cHyncNwHcI2X2iYyVMh+TtEO0sMsVI2ACKIaulYrbZVr77Rs1pe+bAHLcfXH1xeLp9FYgdqPzETABDGs/YBqMc1w0GvYF6RSAfcCS0icBcEw5Q1LU7tlv/0mrWe/fTQD1sKzVEvEAcxLZchswMdpQnwTwBkkvz0Dnrv72z0CrWVETQDP82qjNi5J0YVETYSJpcWJY0lOwLwIgEOI5koiOGpEvFwQFjbTrMgsjYAIY5s7grU5egajcP2UoXrR8XwRAyOmctNL3lXRCdNYu1xgBE0BjCFtpYFVJZ2VkGybeIEF1B0cAX5f0sCBEeAdiJFQc9CDYj4tdiYAJYLi7AQ3/PsHhcSV4C0mEE19Q+jgB3CYp/4JzWJYKLMcQItquyy2OgAlguLuDz2Y+n6P5BJ4v6d1DIoBXSyJ4Z0RgrltK+keksMtUQ8AEUA3KVhrK8RQktsDGQyEAThxoMrnPjwhhvgj3ZekWARNAt3jn9raFpKMzKnEbwHN3Fen6E4CIPznRe+6UEoNkzNVFKyBgAqgAYotNED6cjMF8TkdkUcvArgmA3OjkSI/I9zLjA0TadJkYAiaAGE59ltpL0gHBAfD2v8tCivQuCYC+uMK4VXDQz5P0nmBZF6uLgAmgLp5ttIaLMMrA6DO8oCFdtHKNCeQ4/pDc4+aSLqzRsdvIRsAEkA1ZLxW+JQljn4i8VhIK+BWkSwLIub88LGX3jUzMZeojYAKoj2kbLT53qSu+lTrEpXiDPgkAg567B1F4uqSPBMu6WH0ETAD1MW2jxbUkkSg0mlMQBzw+G5ZLVycAvld+G0SAsEZMzOm9g4C1UMwE0AKoLTVJKP0HB9veVRIRgzongF0irolpVEdlmAkH5+1imQiYADIB67E4GYKjyvIvSHpCHwRwqKRtgyBZ+x8EqsViJoAWwa3cdI5p/cXJkYgQ4suki08A+iCJR9T1lwwn4aimlcF0c1cgYAIY107A9z9qXUv8TW4POiMAzBDRQEYE66ZowINIey5ThoAJoAy3vmq9XdLuwc73lkQuwc4IgCP9u4KDI9gBVxuWfhEwAfSLf27vuNbjYh8Rym3ZJQEQx4x4ZhEh3j9x/y39ImAC6Bf/3N5JH/aXoIvwXyWtLokgu53oAM7OMP9lYIsGL8hFxeWLETABFEPXW0UiZpExKyK4B+Mm3DoBcJ+PAjAiOCxEwx5H2nOZcgRMAOXY9VUzx9Fu+U1b27cAj5L0lSAiH5S0c7Csi7WLgAmgXXzbaP1xGZ/Py2MFtk0AOfb/O0n6UBvIuM1sBEwA2ZD1XmFNSecFR7E8ShAEwFt6tWDF3GLcN94rWAmbZmwAasgRki6q0dCMtmECGOfCnxq8RsfblszD/4YAHisJE8GoQ8HQofmwpB2HPsiBj88EMPAFWmR4OTduy+IDzH0CkKGHTD1jl29LIl7aclPHsU+op/GbAHoCvmG3OQF3STj6yfk6gEMmJRFoOLi2q58padNoWuS2BzPy9k0A41zAHEUgL/w95xPAtSUdk3GXOCSIcHLgDvRnQxrUiMdiAhjn4qFDi2bP/pKkrVa+BcBhh2Cctx7R/C9P0YOi140jmlpvQzUB9AZ9o47R42EReP1AK6Qb32iha8ANUx6+SCOBflovQpTht7Tey2x1YAIY73r/iAc7MHxMgm+0mB0A3xKfH8HNgDX+gZUuKGICKABtIFXwpeH5jcgaSxkCDf1mwBr/yBKXlTEBlOE2hFo5rsH3nGQJONSbAWv8291qJoB28W2z9RdK+p9gB9tMIgBuBr4p6T7BBrsoZo1/+yibANrHuK0eMOxDwx+R3SYRAI1wM3CSJEIK9y1o/Jng4X0PZMr7NwGMd4FzEvDsHyEAoBjKzYA1/t1sTBNANzi30QtX+HwiR+TdUQKgMTSL+Azk1IkMIlrmYEnPjBZ2uUYImAAawddrZa7v+UyOyKG5D/MrJL0+0nLlMsdLeoht/CujunhzJoDOoK7eEc/0JZLQ302So3MJgAZJ2bXDpJYr/rs1/hXBDDZlAggCNdBiZOEiG9ck+VEJAXR5M2CN/6QlbOffTQDt4NpVq5j54u47SU4rIQAa7eJmwBr/ScvX3r+bANrDtouW8efZJNDROaUEQNvYGxOJlMgibYg1/m2gGmvTBBDDaailsJLdPDC485oQAO23dTNAbEBiBFr6QSCHALZJqcT6Gal7XQiBaMbgi5oSAJ3Xvhmwxr//TZ1DAIz2aEkvkESOOkv/CHxtfvafJYZzSQ0CoP1aNwMkBSWqzwX9YzjTI8glAMAi0CQ26Ptn3EPPNMgtTj7qEXh5LQKocTOAxh+fg2gi0Rbxm/mmSwhgDjSiO79M0sdnHsX+AOicAJgqWYDQPpb4DFjj399mWajnJgQw195x6bOAKylLtwh0/gkwN73SmwFr/LvdIJN6q0EA9EECSjI+E63WeRomoV7v3ztVAq487K1SNKHo54U1/vUWvlZLB0l6Vq3GUsaaPSXhz/Hfiu26qYUR6OwacLEFYLFfF1gda/wDIPVQhOCSu0g6IKWSrjWEEyWRmPL7tRp0Owsi0Ikh0CTsSUC4/RKFrPGfhGD//0669tdK2rVifEj0PR+QtJekC/uf4lSO4KeSNgjMrNgUOND2Mm+kxaIJWeMfQXA4Zcgn/05J9604pD9JepWk90mCFCz1EPidpFsEmityBgq0u7zIQjcD1vjnIDissk+VRB76yOaKjvyH6bPgu9EKLrckAq27A+fiv/LNwEskvTW3EZcfDAIEnODN/SJJ16o0KhSDGJMRifrcSm3OajOtBgQpBXXuZgAtsG38S1EcVr07SHqHpEdUHBZZbfaV9C5J/6nY7iw11VpIsKYg4jRCtFJn7m2K5LDqPyYRAXnpagk5Hp8v6Vu1GpyhdloJCjpD+HmqBQig8OXTDs3+qgX1F6vyqdQuSi1LDIHqYcFj3bqUEZBulfI0blsRjL+lq8i3JYejik1PZVO7pRNZZHJbR631Io25jBGYQ+BBkg4M3kVHUfuVJLLeHBmtMKPl0MtAAhG5hwkgApPLlCBwDUnPlbQfWWhLGlikDp5uu0s6q2Kb09RU1BOQOS+ZHHSaQPFc+kNgzRRKnpwOtV44hL1+Q7JJuLS/qQ2y5x+nRD6TBrdkevBJlf3vRiAXAYJUYk14r9yKS5Q/I9kjHFaxzTE3hQ8HD3YkTidEsXEtRh4zaB57dwiw356e3t5YidaSr6bv3tNqNTjSdriKPT04dq7ktzIBBNFysaoI3FDSPilgCLqCGvLPZGGKB+M/ajQ4wjYwuCN9X0TI8LWXCSAClcu0hcCd023BFhU7OEfSHpI+U7HNsTS1d1K6Rsa7naRPmgAiULlM2wg8Mb29MWOtJUQq5trwF7UaHEE7kN7WwXHiLnyKCSCIlou1jsB1U4h5Aopep1JvRCrGHoGryGjG3Epd99LMryWtF+gZc3ychv5tAgig5SKdInAbSVj98T1bS/4gibiT0xypmHR9UU/KZTcAgGsCqLXF3E5tBB6W3t7rV2yYEHQ4GU1jpOIcBSDRup5mAqi4s9xUKwhcM13vodxarVIP0xqp+M3JcSoCExaaRGv2CSCClsv0jsDNJL1R0g4V9+z5SecwLZGKv5MS60QWiyA9y05B/gSIwOUyQ0Fgs2RNePeKAyJSMZ8FJ1dss+umUKCSdyESoYmgK2uknA0mgK5Xyv01RgBz151T2Hk2cg3hs+B2I3Yw2lIS2YAicsT8KE4+AUQgc5khInBjSa+R9GxJqzQc4NiT0+S4AJOliVDvy8QE0HDnuHrvCGyYPgvuXzgSjsTENzyvsP4QqhErgTlE5AGSyNtoAoig5TKjQeApktCEr505YmILkNZ8rJLjAISn4E3mR1byCWCsy+5xL4QAbrCELH9xUCFGKnoMYsYcgZhUa0RRjsjnJWF2vVxMABHYXGZsCNw+xcV75ISBPzhlrxrb/OaP9xhJhGCLCAlfSctmAoig5TKjR+DRkt6+iH08jjM1g5f2ARb2EURM5mYkIgRt/a0JIAKVy0wLAoQs55PglfMi5RAv4I6ScB0es2C/QJSliJBr4a4rF/QnQAQ6l5kGBG6ZlIRPlrTCVdiIJ4dvQzRh6/4pCMsK0zUBjHj1PfQiBHhgTpJEBKExC4SWc4JZ5v/vE8CYl9xjNwJXIsBtB4ZQEeHBhwCuIj4BROBzGSMwLARQ+hH8c93gsPCmXJAsTABBBF3MCAwIgYdmZkhC4Ym1oE8AA1pED8UIlCLwaUlk247IDySRMXhB8QkgAqHLGIHhIEA+BZR/BEuJyPLgHz4BROByGSMwbAS4zuMaMyKkULu5JByefAKIIOYyRmDACKya3v6rB8d4iKRnLFXWnwBBJF3MCAwAgRzHH4aLzcMJJoABrJyHYAQaIkDQk1Ml4f4bkZ+nu///mgAicLmMERg2Ak+S9KmMIe4i6f2TyvsTYBJC/ncj0D8CvP1x5uE+PyJENyLN2qWTCpsAJiHkfzcC/SNAOPSPZAxjUcu/ldswAWSg6qJGoAcEuO8nwSlRiyPC1d86ki6IFDYBRFByGSPQHwI7rRzFZ8JQyPiD8U9ITAAhmFzICPSCABl80fxjzBMRsiETDu2sSGHKmACiSLmcEegegQMk7ZXR7XskYSsQliERwAsl5aR8+oKkL4Vn6oJGYFwIkCadb39CmkUEjT96gt9HCs+VGRIB3G9+woLAJC5M1yIhZUegPRcxAkNCgKClW2cMiOCnxD7MkiERAAMnbvnjM2bwYUk7ZpR3USMwBgS2kHR0xkAJcsqJITu70dAIgPRGhC+6RsbkiYl+bEZ5FzUCQ0YAh5+fZpj8Mpd9JOElmC1DIwAmcKCkF2TMhEgn5Dsfe5DHjCm76BQj8CZJL82YH7EBsBDkFJAtQyQAcpedJumGGbMJWz5ltOmiRqBrBFCCE7E4muiD8ZETMcdHYIU5DZEAGCAMCBNGhbf/JunoFK3jckZgSAhg8XeipLtlDApXX5TnS3r8LdXeUAngOulhXi8DDJwlNpWEKaTFCIwNgdw7fx569vvJTSY6VAJgTuQxz1XukSYJewKLERgTAuz1b2Ya5pEROEdXtiAeQyYABvxeSbtmriQJIQ/PrOPiRqAvBG4s6ceSSNwZFRJ83lnSxdEKi5UbOgGgCORacO2MiZ4vaUNJf8yo46JGoA8EeP5Q4OVmKX6MpK/UGPDQCYA5MtnDMif7dUnkhr88s56LG4EuEcjJ7js3LggDzX8VGQMBMNFPFEyaVEhcD1qMwBAR2DzpuHKM3jB/v4ukc2tNaCwEsGZyjFgjc+IcrbCpthiBISFwM0lk7Im6+c6NfavaDnBjIQAAeJykL2auItZRMO2PMuu5uBFoCwHu+7+R7u9z+nifpGfnVIiUHRMBMB88nnaPTGxembOTkVC2o0RmPy5uBCYhwPP2wQIHNszdye/390kd5P772AjgWpK+nR7onLlSBw+rf+VUclkjUBmBVy2WpnuJfojyc+/0yVB5OOOMCITbI99PN8pE4+OSnuabgUzUXLwWAk+V9LGCxl4k6R0F9UJVxnYCmJsUyhAiAuUK1lNYChbbTud26PJGIFm1HimJE2yOcOW3XZv7dawEAIiw4m45aKay+E3jP20xAl0ggJMaSr/VMjvDt4Wjf/Xv/vnjGDMBwKbYT2+WCSzFWz1WFYzHVaYTgQ0kfUtSNJvvHAqk875ncotvFZkxEwDAYB/w3YykCfPBJJQYIcUsRqANBAjPfbyktTIb5/P0sbVMfSf1PXYCYH7rJxLAqSJHMBMmd/pHcyq5rBEIIEB0Xk6nOQ4+c812ejqdBgIAONwpj5KEkUWukEWFbCoWI1ADAbz0COiZa+VH37izo9fqTEk9LQQAeLkJFOcv9iskvbHG6ruNmUaAkF5o+3NN1gHtyyki9mVdIjhNBABu+zbQ8L9OEoYanbFvlwvtvlpHAGX01yTdoKCn76dTbKsa/4XGNW0EwHw+IOmZBYtAFewEOILZjbgQwBmtRi4LDM2uWzB/sv/wCUsci85l2ggAAFeRdHD6JCgBlHRj20v6W0ll15kpBHh+eGG8LTOc1xxIZ0i6v6Tf9YXaNBLAHAmg3S8NnPCTdBUTzrLa1wK6394Q4EWDMRpBPUqEh/6+ks4sqVyrzrQSAPgQaIFAItsUgsWRjKMdoZctRmA+AvihcOQn6lSJsLd48/+ypHLNOtNMAODEtSD21E8oBA3vwV0kHVJY39WmDwHiTZLDkrv+EvmDpIdI+nlJ5dp1pp0AwAuT4U+ngCKl+HE/+zJJpGC2zC4CePS9v1DZB2p8UuKWfvpQIJwFApgjAQIxoNwrFUI3P3kIx7bSCbheMQIkqnlzg+99Oj41vfnJ5TcYmRUCAHDmyl0/Rj+lQogx3Ik/ZHuBUghHV++uSZeEY0+pkO33oTWDeZYOZOV6s0QAc3NHa0sG4iZzPzQlLMFryzKdCLA/yLxDjsprN5giZsFbSxrkXmnyEDTApPeqKAW5IWiysHzPoSDE9NMyXQjgxHOQpC0bTouTIoE8Ces1SJlVAmAxuIMl4UiuF+HKC0mYpxf3Zck1yF013kFxt/8cSa+XdP2G08CsnE/OQZuWzzIBsL53TKHF+NtE/pRI4CNDX/Amk5zyuiTcwIycKDxNhJuindIJs0k7ndSddQIAZEI1cUNQajA0f6GOSbqB0zpZPXdSAwGcd16ZokSVuJPPH8Nvks3JaPJQmACuWL45m26uenJSNS20ATEewqmIfO+cDCzDRODqKSAMx/TcqD0LzQhPQK6ZR7XmJoAVlxK9AEZDJcEcVt4UF6VvQIyIbEA0LBK4X0oyQ7KNGrKfJILNjs6L1CUr2x4AAATNSURBVARw1eUnbxvmw7ho1hAyE6EQwnZ8dBukBgADamPT9KA+vNKYMOt9eopGVanJbpsxASyMN58Be6bswk0/CeZ6wMMQ7fJnJf2n22We+d42Tg8+qeZrCW7jO0u6oFaDfbRjAlgadTYOkYM3qrg4KIrekmIWXFKxXTe1IgLsbT7pXpJcu2vhgzUo+Sm5MRj0FV9kwiaAySjhTMQRfq8UbGRyjVgJXELRD7x7bIqj2PR6K8WJDTduHnyO/DWFHJO89UnWORViAogvIwoj3IK5L64pxIHDKpGryO9Nw1ulJjgZbaG74Xt8V0nkj6wpFydvUKwDp0qPYwLI2yaYDu8t6aWFIcgn9XZKOlpiXTjqb8tJE63071juodDjrcz3fS19zfzhYS1K6PjewnZVwmrBZkwAZeiS9YXveDK4tCHYjn8x6R/IK/fPNjoZaZvsWdJmbZvcs2/Z0jzw9dgjBf8Y/bf+YhiZAJrtHlw8iQtHMoi25K+SvpoIAWMT/vesCfsUhSwPPb/btggAn2Tc1hDoc+qVtCaA5juJYyceXxiCNHUsmjQaTgacCLiCghSwMZhWIe4eBItHHr9bdDBRfDm4/v19B30NogsTQL1lIBsMacdxEW7iZpwzIo6px6UklPwl6sxYj6uQ530kbZ4CZvLffON3IZys0O2c3EVnQ+rDBFB/NXhToSREG12SKKLJiM5LZMBtAvnlUSpyShgaKeCARYQdou1wu8JDX/t2JYIjzluvlvSdSOFpLGMCaG9VcTBBiYQG+XrtdTOxZa6wIAIIgR+eimi0OeZy09DWtRZx9NZJV3Lrpr+4XRNVt/Y13UQQVirAaYnT2rG5FaetvAmg/RW9SXI1JbwUb74hCSbJ2LNDBvw4QaD4mv/DkYn/zV+O5HzeYBzFX36QG58/zHPu75qSuJcfkkB0n5P0VkknDmlgfY7FBNAd+ii1MFRBYdg0AEl3ox5/T5juYmTFbQ2puCzzEDABdL8dwBxPQ4iA2IRNg1B0P4Nx9MjnDjH8MaoalY9+l/CaALpE+6p9oScgkzEKw1v3O5Sp6J07fFy5efBtVh1YUhNAAKQOivBtzamA8NGcCmpEqOlg2IPoAj0GkZkJ5ELKLpSeliACJoAgUB0WgwxwY4UMnlgpOlGHw++kq8skEW+fhx6TaR/xC2E3ARQC11E14tZtlsgAa7j1O+p3iN2cK+kISRjtHOWHvs4SmQDq4NhVK8QqfKCkB6Xfel113EM/fM9zXYexDg89kXbbslnoYXrD6NIEMIx1KB0FnnBzhHD35JTEHf0YBTuEEyQRdIO/JGN16LSWV9IE0DLAHTfPleIdkrUdFndzv7ZcZkumh1ERlonESCRp5txfIiRZOkbABNAx4D11t3pyoV1bEmTA3/n/zf9Xw1wZo5sLk4kxZsb4IRADkd+Z6S/f8j7K97QRVu7WBDCQheh5GOwDbPdxXpr7rbrS/+b/50hO4hMClPCb++8/pwd/6v3ne16n6t2bAKpD6gaNwHgQMAGMZ608UiNQHQETQHVI3aARGA8CJoDxrJVHagSqI2ACqA6pGzQC40HABDCetfJIjUB1BEwA1SF1g0ZgPAiYAMazVh6pEaiOgAmgOqRu0AiMBwETwHjWyiM1AtUR+H/Hynb4UiW3TQAAAABJRU5ErkJggg=='
            }}
        />
        );
  }

  render() {
    const recentUpdates = this.props.items;
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            {this._getRecentImg()}
            <Text style={styles.sectionHeader}>Recent Status Alerts</Text>
        </View>
        {recentUpdates.map((item, i) => (
          <TouchableHighlight key={i} onPress={() => navigate('FlagStatus', { item: item })} underlayColor="#87ceeb">
            <View style={styles.rowContainer}>
                <View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        <Text>{item.start + " - " + item.end}</Text>
                    </View>
                    <Text style={styles.statusTitle}>{item.short}</Text>
                </View>
                <Icon name="chevron-right" size={15} style={styles.chevron} />
            </View>
          </TouchableHighlight>
         ))
         }
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        margin: 2,
        borderRadius: 2,
    },
    headerContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: "center",
        alignItems: 'center',
    },
    sectionHeader: {
        fontSize: 24,
        //fontWeight: '800',
        padding: 12,
        //fontFamily: 'sans-serif-condensed',
    },
    itemContainer: {
        padding: 10,
        flex:1,
    },
    rowContainer: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 10,
    },
    statusTitle: {
        fontSize: 16,
    },
    chevron: {
    },
});

export default History;