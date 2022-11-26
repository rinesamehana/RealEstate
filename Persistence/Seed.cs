using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {

        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
          
             if (!userManager.Users.Any())
            {
                 var users = new List<AppUser>
                 {
                     new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
                     new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
                     new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
                 };
                foreach (var user in users)
                 {   
        
                     await userManager.CreateAsync(user, "Pa$$w0rd");
                     await userManager.AddToRoleAsync(user, "Member");
                 }
                 
            }

            
             
            if (context.Gjinite.Any()) return;
            {

                var gjinite = new List<Gjinia>
            {
                new Gjinia {
                    Lloji ="Mashkull"
                },
                new Gjinia {
                    Lloji ="Femer"
                },

            };

                await context.Gjinite.AddRangeAsync(gjinite);

            }
            if (context.LlojeteUserit.Any()) return;
            {

                var llojeteUserit = new List<LlojiUser>
            {
                new LlojiUser {
                    Lloji ="Individ"
                },
                new LlojiUser{
                    Lloji ="Biznes"
                },

            };
                await context.LlojeteUserit.AddRangeAsync(llojeteUserit);

            }

            if (context.Shtetet.Any()) return;

            {

                var shtetet = new List<Shteti>
                {
                    new Shteti
                    {

                        Emri = "Albania",
                        Shkurtesa = "AL",
                        Qytetet=new List<Qyteti>()

                    },
                    new Shteti
                {

                    Emri = "Algeria",
                    Shkurtesa = "Ag",

                },
            };
                await context.Shtetet.AddRangeAsync(shtetet);

            }
            if (context.Kohaa.Any()) return;
            {
                var kohaa = new List<KohaEPunes>
            {
                new KohaEPunes {

                KohaEPuness = "Full-time",
                Koha = "8 ore"

                },
                new KohaEPunes {

                KohaEPuness = "Part-time",
                Koha = "4 ore"
                }

            };
                await context.Kohaa.AddRangeAsync(kohaa);
            }
            if (context.Rolet.Any()) return;
            {
                var rolet = new List<RoliUser>
            {
          
                new RoliUser {
                    Roli = "Agjent"
                },

                new RoliUser {
                    Roli = "Klient"
                }

            };
                await context.Rolet.AddRangeAsync(rolet);
            }
            if (context.Pamjet.Any()) return;

            {

                var pamjet = new List<Pamja>()
                {
                    new Pamja
                    {

                        Pamjaa="Nga deti",


                    },
                    new Pamja
                    {

                        Pamjaa="Nga mali",

                    },

                };
                await context.Pamjet.AddRangeAsync(pamjet);

            }
            if (context.Gjendjet.Any()) return;

            {

                var gjendja = new List<GjendjaShtepise>()
                {
                    new GjendjaShtepise
                    {

                        Gjendja="Perfect-like new condition"
                    },
                    new GjendjaShtepise
                    {

                        Gjendja="Excellent-in  good shape & well maintained"
                    },


                };
                await context.Gjendjet.AddRangeAsync(gjendja);

            }

        
            if (context.LlojiShtepive.Any()) return;

            {

                var llojishtepive = new List<LlojiShtepise>()
                {
                    new LlojiShtepise
                    {

                        LlojiiShtepise= "Dy Kateshe"
                    },
                    new LlojiShtepise
                    {

                        LlojiiShtepise= "Tre kateshe"
                    },


                };
                await context.LlojiShtepive.AddRangeAsync(llojishtepive);

            }


            if (context.MenyraPagesave.Any()) return;

            {

                var menyrapagesave = new List<MenyraPageses>()
                {
                    new MenyraPageses
                    {

                        MenyraePageses= "Cash"
                    },
                    new MenyraPageses
                    {

                        MenyraePageses= "Ebanking"
                    },


                };
                await context.MenyraPagesave.AddRangeAsync(menyrapagesave);

            }



            await context.SaveChangesAsync();


            if (context.Ambientet.Any()) return;

            {

                var ambienti = new List<Ambienti>()
                {
                    new Ambienti
                    {

                        LlojiAmbient= "Pool"
                    },
                    new Ambienti
                    {

                        LlojiAmbient= "Tennis"
                    },


                };
                await context.Ambientet.AddRangeAsync(ambienti);

            }

            await context.SaveChangesAsync();



            if (context.Kontratat.Any()) return;

            {

                var kontratat = new List<Kontrata>()
                {
                    new Kontrata
                    {
                        LlojiKontrates= "none",
                  

                    },
                    new Kontrata
                {

                    LlojiKontrates = "mujore",
                  

                },
                new Kontrata {
                    LlojiKontrates= "vjetore",
                
                }

            };
                await context.Kontratat.AddRangeAsync(kontratat);

            }


            // if (context.Kafsha.Any()) return;

            // {

            //     var kafsha = new List<Kafshet>()
            //     {
            //         new Kafshet
            //         {
            //             LejohenKafshet= True,
                   

            //         },
            //         new Kafshet
            //     {

            //         LejohenKafshet = False,
             

            //     }
            // };
            //     await context.Kafsha.AddRangeAsync(kafsha);

            // }


            if (context.Pajisjet.Any()) return;

            {

                var pajisjet = new List<Pajisja>()
                {
                    new Pajisja
                    {
                        LlojiPajisjes= "Lavatriqe",
                  

                    },
                    new Pajisja
                    {
                        LlojiPajisjes= "Tharesja e rrobave",
                

                    },
                    new Pajisja
                    {
                        LlojiPajisjes= "Klime",
                

                    },
                    new Pajisja
                    {
                        LlojiPajisjes= "Ene larese",
                    

                    },

                };
                await context.Pajisjet.AddRangeAsync(pajisjet);


            }
            
            
        // }
        // public static async Task SeedDataa(DataContext context)
        // {
        //     // if (!userManager.Users.Any())
        //     // {
        //     //     var users = new List<AppUser>
        //     //     {
        //     //         new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
        //     //         new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
        //     //         new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
        //     //     };
        //     //     foreach (var user in users)
        //     //     {
        //     //         await userManager.CreateAsync(user, "Pa$$w0rd");
        //     //     }
        //     // }
        //     if (context.Qytetet.Any()) return;

        //     {

        //         var qytetet = new List<Qyteti>()
        //         {
        //             new Qyteti
        //             {

        //                 Emri = "Albasdfgdfnia",
        //                 KodiPostar = 2,
        //                 // ShtetiId=1,

        //             },
        //             new Qyteti
        //         {

        //             Emri = "fdf",
        //                 KodiPostar = 33,
        //                 // ShtetiId=2


        //         },

        //     };
        //         await context.Qytetet.AddRangeAsync(qytetet);

        //     }
        //     await context.SaveChangesAsync();
        // }
        // public static async Task SeedLagjet(DataContext context)
        // {
        //     // if (!userManager.Users.Any())
        //     // {
        //     //     var users = new List<AppUser>
        //     //     {
        //     //         new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
        //     //         new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
        //     //   User      new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
        //     //     };
        //     //     foreach (var user in users)
        //     //     {
        //     //         await userManager.CreateAsync(user, "Pa$$w0rd");
        //     //     }
        //     // }
        //     if (context.Lagjet.Any()) return;

        //     {

        //         var lagjet = new List<Lagjja>()
        //         {
        //             new Lagjja
        //             {
        //                 Emri= "Janina",
        //                 // QytetiId=1,

        //             },
        //             new Lagjja
        //         {

        //             Emri = "Qendresa",
        //                 // QytetiId=2,

        //         },

        //     };
        //         await context.Lagjet.AddRangeAsync(lagjet);

        //     }


        //     await context.SaveChangesAsync();
        // }
        // // public static async Task SeedStafi(DataContext context)
        // // {
        // //     // if (!userManager.Users.Any())
        // //     // {
        // //     //     var users = new List<AppUser>
        // //     //     {
        // //     //         new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
        // //     //         new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
        // //     //         new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
        // //     //     };
        // //     //     foreach (var user in users)
        // //     //     {
        // //     //         await userManager.CreateAsync(user, "Pa$$w0rd");
        // //     //     }
        // //     // }
        // //     if (context.Stafii.Any()) return;

        // //     {

        // //         var stafii = new List<Stafi>()
        // //         {
        // //             new Stafi
        // //             {
        // //                 Emri= "Rina",
        // //                 Mbiemri="Veseli",
        // //                 Email= "rv51758@ubt-uni.net",
        // //                 NrTelefonit="044-444-444",
        // //                 RoliId=1,
        // //                 LlojiUserId=1,
        // //                 KohaId=1,
        // //                 GjiniaId="2",
        // //                 QytetiId=1,
        // //                 ShtetiId=1,
        // //                 Adresa="Rr.Haxhi Hoti",


        // //             },

        // //     };
        // //         await context.Stafii.AddRangeAsync(stafii);

        // //     }



        // //     await context.SaveChangesAsync();
        // // }
        // public static async Task SeedShtepite(DataContext context)
        // {
        //     // if (!userManager.Users.Any() && !context.Shtepiat.Any() && !context.Ambientet.Any() && !context.Pajisjet.Any())
        //     // {
        //     //     if (!userManager.Users.Any())
        //     //     {
        //     //         var users = new List<AppUser>
        //     //     {
        //     //         new AppUser{DisplayName="Bob", UserName="bob", Email="bob@test.com"},
        //     //         new AppUser{DisplayName="Tom", UserName="tom", Email="tom@test.com"},
        //     //         new AppUser{DisplayName="Jane", UserName="jane", Email="jane@test.com"},
        //     //     };
        //     //         foreach (var user in users)
        //     //         {
        //     //             await userManager.CreateAsync(user, "Pa$$w0rd");
        //     //         }
        //     //     }
        //     if (context.Shtepiat.Any()) return;
        //     {

        //         // var shtepite = new List<Shtepia>()
        //         // {
        //         //     new Shtepia
        //         //     {
        //         //         ShtepiaId=1,
        //         //         Lokacioni = "Haxhi Zeka",
        //         //         PamjaId=1,
        //         //         LlojiShtepiseId=1,
        //         //         GjendjaShtepiseId=1,
        //         //         KafshetId=1,
        //         //         Ambientet=new List<ShtepiaAmbiente>{
        //         //             new ShtepiaAmbiente{
        //         //                 AmbientiId=1,


        //         //             },

        //         //             new ShtepiaAmbiente{
        //         //                 AmbientiId=2,


        //         //             }},

        //         //         Pajisjet= new List<ShtepiaPajisjet>{
        //         //             new ShtepiaPajisjet{
        //         //                 PajisjaId=1,

        //         //             }
        //         //             ,
        //         //               new ShtepiaPajisjet{
        //         //                 PajisjaId=2,

        //         //             }
        //         //         }

        //         //         },







        //         };
        //         await context.Shtepiat.AddRangeAsync(shtepite);

        //     }
        //     await context.SaveChangesAsync();
        }






    }

}

