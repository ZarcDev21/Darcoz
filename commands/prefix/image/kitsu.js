const Discord = require("discord.js");

module.exports = {
    config: {
        name: "dong", // Name of Command
        description: "gacha foto kitsune cuy 🥵", // Command Description
        usage: "pap dong, udah gitu aja" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        var facts = [
      'https://cdn.discordapp.com/attachments/808680496699146240/826405427947634708/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405428396294164/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405428639301652/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405428841545758/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405429058863165/image4.jpg',
'https://cdn.discordapp.com/attachments/808680496699146240/826405429340536832/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405429571485716/image6.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405429994717204/image7.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826405454724464660/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406015478136882/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406015977127976/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406016249233408/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406016487784448/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406016672989194/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406016886374440/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406513056808960/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406513597481000/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406513894752306/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406514133565450/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/826406514360713250/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117414180454410/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117414415859742/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117414625181706/image3.png', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117414881558578/image4.png',
'https://cdn.discordapp.com/attachments/808680496699146240/827117415182893076/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117415397195846/image6.jpg',
'https://cdn.discordapp.com/attachments/808680496699146240/827117415623426068/image7.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117416055570452/image8.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/827117416348778506/image9.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840197200411361280/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840197198226653214/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840197196170657802/image2.png', 
'https://cdn.discordapp.com/attachments/808680496699146240/840197193314205706/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840197189523210320/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193862597214288/image9.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193862009749534/image7.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193861829132298/image6.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193861560303626/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193861291737098/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193860927619082/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/840193860700602388/image2.jpg', 
'https://cdn.discordapp.com/attachments/840157629338877964/840193667779002378/image1.jpg', 
'https://cdn.discordapp.com/attachments/840157629338877964/840193667066494976/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060716937052190/image9.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060716715278366/image8.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060716433080355/image7.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060716069224498/image6.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060715712184390/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060715376771083/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060714755358760/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060714295033886/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060713879142500/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060713636134962/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850061332535312453/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060794049069076/image9.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060793541820447/image8.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060793247694898/image7.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060792932859934/image6.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060792501239838/image5.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060792179195935/image4.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060791880613908/image3.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060791633674240/image2.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060791323426856/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060791058137139/image0.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060801041498122/image1.jpg', 
'https://cdn.discordapp.com/attachments/808680496699146240/850060800781844551/image0.jpg',
'https://i.ibb.co/XsB4XzR/IMG-2102.jpg',
'https://i.ibb.co/Bny0gsQ/CEEAD961-88-F5-4819-B973-22005364-FB82.jpg',
'https://i.ibb.co/Nrn7QN5/IMG-4633.jpg',
'https://i.ibb.co/kMkYXM2/C0-B51739-DA96-467-E-9-C94-F38-B9-A30-CC5-B.jpg',
'https://i.ibb.co/GW0yc5M/IMG-4291.jpg',
'https://i.ibb.co/Y78nZhb/IMG-5259.jpg',
'https://i.ibb.co/6FY4hyc/IMG-4665.jpg',
'https://i.ibb.co/FJ03Cd7/IMG-3908.jpg',
'https://i.ibb.co/4ZDZQ2d/IMG-5627.jpg',
'https://i.ibb.co/Jsmw7mY/IMG-4287.jpg',
'https://i.ibb.co/41zZH1K/IMG-5407.jpg',
'https://i.ibb.co/zP4jDW8/IMG-5261.jpg',
'https://i.ibb.co/HYJ0PwL/IMG-3907.jpg',
'https://i.ibb.co/HKnTBfd/IMG-5146.jpg',
'https://i.ibb.co/d6QYmBw/IMG-1742.jpg',
'https://i.ibb.co/rHgQQyz/IMG-4264.jpg',
'https://i.ibb.co/db6cZz6/9-EC4-FFDF-CB7-E-4601-91-B3-0846-B7-FB4-E83.jpg',
'https://i.ibb.co/7R442WR/IMG-5408.jpg',
'https://i.ibb.co/M9WGPB7/IMG-5669.jpg',
'https://i.ibb.co/pZrQdhS/IMG-5411.jpg',
'https://i.ibb.co/ySn3Frn/IMG-4290.jpg',
'https://i.ibb.co/z5prJCf/IMG-1738.jpg',
'https://i.ibb.co/fD6Tg10/5958-C9-A5-EAFD-4988-9529-2-B61-C9-FC44-B0.jpg',
'https://i.ibb.co/R42RLMf/16639680-17-BE-4763-9472-105-D8-D5-F77-E8.jpg',
'https://i.ibb.co/xSbQPYR/IMG-1741.jpg',
'https://i.ibb.co/Tq313rf/077464-E7-7986-4-F38-99-E0-622-E62-D90-A06.jpg',
'https://i.ibb.co/hKy5fhY/Full-Size-Render.jpg',
'https://i.ibb.co/NLhRLQD/E2911207-CDA7-4-FD2-959-C-56-D6-D7-A9-B230.jpg',
'https://i.ibb.co/KhbMPZY/96177-E9-B-9-C8-B-44-FD-B8-C3-DA0-CE9-CCBCB1.jpg',
'https://i.ibb.co/yYbdSMj/B34-BA542-C96-F-4-E55-AC0-E-FA64-DAC1-BDB4.jpg',
'https://i.ibb.co/NTtMhyQ/IMG-1667.jpg',
'https://i.ibb.co/yBDmPFw/IMG-0646.jpg',
'https://i.ibb.co/4fqzDxh/10-E468-C0-5-C3-C-4-E21-937-E-3-D78-BF7-F5-BEC.jpg',
'https://i.ibb.co/NsYFqSp/LINE-P650652539-472119.gif',
'https://i.ibb.co/LJ68x6w/3-DA0-A362-8567-4884-BD44-AD33395-FE25-A.jpg',
'https://i.ibb.co/4dTSYP7/9-A74-F137-8597-40-F9-9-EB0-5-D0-DD3-EEF99-C.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523018520674304/image3.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523017899900948/image1.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523018159951933/image2.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523017602138162/image0.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523020055793674/image8.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523019820916756/image7.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523019456000040/image6.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523019145629716/image5.jpg',
'https://media.discordapp.net/attachments/808680496699146240/891523018831040613/image4.jpg',
'https://i.ibb.co/dryzR4D/A3-EEAAF4-E15-E-48-E1-8539-CB28767-C9-EB3.jpg',
'https://i.ibb.co/TTMk1sB/57488-B26-81-FC-48-EB-B0-DC-C18-D050-B0-C21.jpg',
'https://i.ibb.co/1zSYH0H/96177-E9-B-9-C8-B-44-FD-B8-C3-DA0-CE9-CCBCB1.jpg',
'https://i.ibb.co/3WzpwPz/84404-ACC-5-A6-C-4-A83-875-A-0-CF72814-DA65.jpg',
'https://i.ibb.co/DDNHCLs/42724-B2-F-6159-4-F0-A-A538-E11-CF88172-AB.jpg',
'https://i.ibb.co/bbJyMxM/5572-ECF4-698-B-4923-8-D78-B38-A5-E3-FA994.jpg',
'https://i.ibb.co/89QT104/363-F5-A7-D-69-A5-4197-BE29-70-E7-F83-E0795.jpg',
'https://i.ibb.co/7zf5fnP/677-D3-CC5-504-F-4701-B734-ABA35-FB16-FA5.jpg',
'https://i.ibb.co/x19FThk/B13-F0369-6098-42-CD-9971-37-A8-E1-AB0790.jpg',
'https://i.ibb.co/7yddgQJ/A5-FC9085-F439-45-F8-A46-C-E04-E0-CAC9-AE4.jpg',
'https://i.ibb.co/5c0BrTT/A86-A283-D-F034-415-E-8618-19-CC375-F02-C5.jpg',
'https://i.ibb.co/sm7nKxK/F451-A7-D7-7158-424-D-B227-7171-CC940-C3-A.jpg',
'https://i.ibb.co/ysK7SR8/IMG-9506.jpg',
'https://i.ibb.co/QP5nHxY/1-D67-F498-DAEE-4-EDE-B971-C3-B29-E4-D9-F11.jpg',
'https://i.ibb.co/6ZytwHy/IMG-7944.jpg',
'https://i.ibb.co/7kgKm5L/Full-Size-Render-1.jpg',
'https://i.ibb.co/HdRsjCf/IMG-8257.jpg',
'https://i.ibb.co/rmtmdmP/02-C7-A251-15-EA-4-FA9-994-F-9-E3-AE28-FD5-F0.jpg',
'https://i.ibb.co/h8MkNJf/2-F4-C7-BAE-498-C-4606-9-E3-B-698-B12381896.jpg',
'https://i.ibb.co/Mg3789s/IMG-8178.jpg',
'https://i.ibb.co/NCqwj8G/5-ADFC509-1-F7-A-4348-BA97-971267-F4395-E.jpg',
'https://i.ibb.co/rcCMcDf/96-A3-F9-E3-E318-4530-B189-7-A6272898-DFC.jpg',
'https://i.ibb.co/t4D3pGM/44-FFF4-C7-2-DA4-4346-B2-A3-4-E967-A77-AD4-B.jpg',
'https://i.ibb.co/vBKbSsk/IMG-5625.jpg',
'https://i.ibb.co/LgQsKX7/8-A7083-AC-07-AB-4-E8-B-B09-F-C2-DFA0-D22212.jpg',
'https://i.ibb.co/qy51Kst/10-B5059-D-3294-44-FB-BEF0-E7-BAF51-C6304.jpg',
'https://i.ibb.co/7WDTwWZ/IMG-5148.jpg',
'https://i.ibb.co/MPzF44y/IMG-5993.jpg',
'https://i.ibb.co/LrGDJWb/IMG-7199.jpg',
'https://i.ibb.co/VL2MsTc/IMG-5259.jpg',
'https://i.ibb.co/LvN1hqb/Full-Size-Render-6.jpg',
'https://i.ibb.co/vznc19w/IMG-5261.jpg',
'https://i.ibb.co/2tRGvDZ/IMG-1939.jpg',
'https://i.ibb.co/tzS3j8w/Full-Size-Render-5.jpg',
'https://i.ibb.co/XsbJwVN/IMG-1712.jpg',
'https://i.ibb.co/fpTV2h7/Full-Size-Render.jpg',
'https://i.ibb.co/7JytRmt/Full-Size-Render-2.jpg',
'https://i.ibb.co/kGtxQ78/Full-Size-Render-1.jpg',
'https://i.ibb.co/KNN8VgB/Full-Size-Render-3.jpg',
'https://i.ibb.co/T2BBRwd/Full-Size-Render.jpg',
'https://i.ibb.co/34DNnvL/IMG-1270.jpg',
'https://i.ibb.co/GPh02cG/IMG-1363.jpg',
'https://i.ibb.co/WzmFwLR/IMG-0891.jpg',
'https://i.ibb.co/J3QppXX/IMG-1937.jpg',
'https://i.ibb.co/4jLyh6W/IMG-1347.jpg',
'https://i.ibb.co/wdZtXNv/IMG-1713.jpg',
'https://i.ibb.co/YD3tMWJ/IMG-1319.jpg',
'https://i.ibb.co/939c56V/B503-FCDD-87-D3-4-C88-A791-DF1-F42-A78-E8-C.jpg',
'https://i.ibb.co/HzrNQhG/Full-Size-Render-7.jpg',
'https://i.ibb.co/BG9yQpG/IMG-0396.jpg',
'https://i.ibb.co/JQNQb3L/C5-E8-FE80-55-E4-4839-AA03-1-D7514634207.jpg',
'https://i.ibb.co/Pxs4PJG/IMG-0394.jpg', 
'https://i.ibb.co/yFLzhTy/E2-F60-FE6-5109-4-F0-F-A181-5383-B26-F2996.jpg', 
'https://i.ibb.co/k8BQB0X/E8-B54-C53-6974-4-A6-E-BE48-BABD0-BC4-A6-C7.jpg', 
'https://i.ibb.co/cxScgVC/D1-E10-FB2-FE51-4766-8-DBD-46-A6-CA3-D9930.jpg',
'https://i.ibb.co/LkjDgrW/IMG-1750.jpg',
'https://i.ibb.co/WGTyJy7/IMG-1853.jpg',
'https://i.ibb.co/DK0ggKM/1-E66-C0-F7-236-C-4-FB3-9509-F8663350-EED5.jpg',
'https://i.ibb.co/zS1NHBd/IMG-1854.jpg',
'https://i.ibb.co/hyyrGnB/IMG-9387.jpg',
'https://i.ibb.co/T1Fr8cf/IMG-1513.jpg',
'https://i.ibb.co/C5kTbT6/IMG-1756.jpg',
'https://i.ibb.co/bJcwrPd/IMG-1170.jpg',
'https://i.ibb.co/r453Pqh/IMG-0991.jpg',
'https://i.ibb.co/PzxC7pk/IMG-0395.jpg',
'https://i.ibb.co/j4gNCkp/IMG-1868.jpg',
'https://i.ibb.co/vXPhGFS/IMG-0368.jpg',
'https://i.ibb.co/8xh4nQs/4-F90434-A-5-A04-4-EDC-BC51-EA261-FA0-F33-A.jpg',
'https://i.ibb.co/NKvzW3b/8-A50501-C-A650-4-CEA-B252-946-F630-F27-D9.jpg',
'https://i.ibb.co/cXDnQMQ/6-CBF71-D2-9-B77-44-B7-A04-C-DC8-E9-A3-B5385.jpg',
'https://i.ibb.co/KKxmPLB/2-B6-C7382-FCC7-4-F3-C-BB43-DF84764-D581-B.jpg',
'https://i.ibb.co/KyR2JVY/00-F68-A54-AD10-43-C6-82-B5-3-D20-AC1-A20-F4.jpg',
'https://i.ibb.co/fCX2gkY/01-BCBD8-D-5-A09-4641-B8-BF-37895738-E585.jpg',
'https://i.ibb.co/qBwm2Kw/5-EF28-A33-F192-4826-9-FC7-13260749-C7-A5.jpg',
'https://i.ibb.co/3pF7Xyc/0-CCC0-E0-D-EDD1-4-E8-C-98-A6-C66110-ED6-F43.jpg',
'https://i.ibb.co/cLhC0zW/0-A5-E4-DC7-FEA9-4-E95-B262-D5-D5-A17548-E7.jpg',
'https://i.ibb.co/K01LD1g/IMG-9993.jpg',
'https://i.ibb.co/tZGGCK2/34178-E53-A8-E0-4478-83-D4-7005-A9390-D72.jpg',
'https://i.ibb.co/vqJLYkw/030-E1-B27-3-B90-4-DC0-8305-14-BF095-AB6-E2.jpg',
'https://i.ibb.co/B6CL5Y5/70-A27-CA7-A709-4238-8-F95-821-D06-A35251.jpg',
'https://i.ibb.co/qyNKcb5/360-D9-DD8-8953-49-FB-B470-769407-BB87-F9.jpg',
'https://i.ibb.co/g3gvZ5V/7-C32-EECC-EDBC-4530-9-FC8-AA68-FEC61-D53.jpg',
'https://i.ibb.co/dLkW4Ps/10-A7-CD3-D-508-E-4-EC4-9642-4-C2903-AD43-C6.jpg',
'https://i.ibb.co/5rfgDcx/020-EA789-BD9-D-4-C5-B-B170-E59-C1-A37-A2-DF.jpg',
'https://i.ibb.co/kJT5Ycr/7-BFFA96-F-1-C26-4744-8-B43-1-D5-E3-DEE4157.jpg',
'https://i.ibb.co/pdqf8vM/3-E7-F83-BA-5274-464-E-8-F86-F5741354-D861.jpg',
'https://i.ibb.co/DDnJ0Vj/39-BA1-D13-F1-A4-4165-ADCE-DAC73984-BF7-F.jpg',
'https://i.ibb.co/wJ9j5f4/83709607-C502-4908-B813-67-C0170-EC78-F.jpg',
'https://i.ibb.co/WzgxZjt/IMG-3217.jpg',
'https://i.ibb.co/sycXHLn/DFC2-F406-E0-CE-45-B4-856-C-CC8-B2-CE5905-D.jpg',
'https://i.ibb.co/xHMDF3W/IMG-1986.jpg',
'https://i.ibb.co/G7pp8gV/867-B6150-DEAE-43-A4-85-C2-3538076-AC92-D.jpg',
'https://i.ibb.co/17gbW4K/8262-B2-DD-0-C75-4-BC8-9744-708-A69-CA3-C4-C.jpg',
'https://i.ibb.co/2SNTvZP/074-AA80-C-C888-42-F4-B941-8-DB34-F64-E084.jpg',
'https://i.ibb.co/dbXH0gk/97-D22155-E553-49-E1-BC16-A9-E1021513-DB.jpg',
'https://i.ibb.co/P5fwmNC/B4-D41163-739-E-41-D9-A4-AC-5-DE9470-D52-CB.jpg',
'https://i.ibb.co/z6xrFBc/573-CBA7-A-8-BC4-4122-ADFD-B91-A91-FB204-C.jpg',
'https://i.ibb.co/ftBc7Bz/IMG-3218.jpg',
'https://i.ibb.co/8BBhmS3/IMG-2572.jpg',
'https://i.ibb.co/jzQxRkk/IMG-3774.jpg',
'https://i.ibb.co/JBQWVgz/IMG-2574.jpg',
'https://i.ibb.co/55T6WpJ/IMG-2573.jpg',
'https://i.ibb.co/thMcMZm/IMG-3369.jpg',
'https://i.ibb.co/6JYbmB5/IMG-2450.jpg',
'https://i.ibb.co/xmyS1My/IMG-1998.jpg',
'https://i.ibb.co/k8pFNwb/AF862-FC0-DA77-40-A1-B01-A-13-D2292-BB3-FB.jpg',
'https://i.ibb.co/KXBSpz3/92252864-5-CDA-46-C7-AD0-C-D390-E8428-E28.jpg',
'https://i.ibb.co/wSSyvyt/IMG-8716.jpg',
'https://i.ibb.co/Xpw5HQw/IMG-3780.jpg',
'https://i.ibb.co/cy2C3vv/IMG-7542.jpg',
'https://i.ibb.co/9sRBmMD/IMG-3773.jpg',
'https://i.ibb.co/V2D4wWh/IMG-3766.jpg',
'https://i.ibb.co/TKRSCpT/IMG-3370.jpg',
'https://i.ibb.co/nj4SxdR/IMG-6076.jpg',
'https://i.ibb.co/BLdMhy7/IMG-3221.jpg',
'https://i.ibb.co/x719YBZ/IMG-7440.jpg',
'https://i.ibb.co/yqkqNqr/IMG-3222.jpg',
'https://i.ibb.co/3rfR8cZ/IMG-1911.jpg',
'https://i.ibb.co/V3TF2dp/0-AB72-EFB-0-E8-E-4-BA8-95-E7-A90-AED0-B0-FD1.jpg',
'https://i.ibb.co/xLkHHLc/IMG-8853.jpg',
'https://i.ibb.co/xJ366qf/IMG-9377.jpg',
'https://i.ibb.co/LYw58g7/IMG-2571.jpg',
'https://i.ibb.co/bQGwZFT/IMG-8715.jpg',
'https://i.ibb.co/64yGHY9/IMG-8598.jpg',
'https://i.ibb.co/0cJY7VL/IMG-8858.jpg',
'https://i.ibb.co/SfhRzNV/IMG-9386.jpg',
'https://i.ibb.co/TPBqvJG/IMG-8347.jpg',
'https://i.ibb.co/HPtmX4P/IMG-6960.jpg',
'https://i.ibb.co/8ddcSJh/IMG-6821.jpg',
'https://i.ibb.co/p32GKsQ/IMG-3781.jpg',
'https://i.ibb.co/B4yq4jn/IMG-4030.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994593583018014/264846F2-EFF7-4271-985C-AA40B0FBB7FD.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994440180543650/IMG_4089.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994439865978880/0C92B0BD-EB99-4DB6-8713-2BFBBEDCD9CB.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994439614304397/9900F8D7-50F9-4D86-924E-97E220FEB210.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994439333302272/88C95768-892D-44D7-A471-BB88D54C8688.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994439110987866/43CF1AC9-A086-4217-932A-6CE373A36CC7.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994438842560552/27D26F59-4B7E-4696-8E18-46AF9D09AE07.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994438616060045/8056604C-9378-411F-95FB-70BDAEF9A9BC.jpg',
'https://media.discordapp.net/attachments/808680496699146240/1036994592937086996/1F452B6F-B708-4A7E-9B12-40B66D47C3DD.jpg'

    ];
    await message.channel.send(facts[Math.floor(Math.random() * facts.length)]);
  },
};
 
