 using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Threading.Tasks;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser, AppRole,Guid, 
        IdentityUserClaim<Guid>, AppUserRole, IdentityUserLogin<Guid>, 
        IdentityRoleClaim<Guid>, IdentityUserToken<Guid>> {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

         
//    public DbSet<AppUser> Users { get; set; }
        // public DbSet<RezervimiAttendee> Attendees{get; set;}
        public DbSet<Gjinia> Gjinite { get; set; }
        public DbSet<LlojiUser> LlojeteUserit { get; set; }
        public DbSet<Qyteti> Qytetet { get; set; }
        public DbSet<Shteti> Shtetet { get; set; }
        public DbSet<Lagjja> Lagjet { get; set; }
        public DbSet<RoliUser> Rolet { get; set; }
        public DbSet<KohaEPunes> Kohaa { get; set; }

        public DbSet<Stafi> Stafii { get; set; }
        public DbSet<Pamja> Pamjet { get; set; }

        public DbSet<GjendjaShtepise> Gjendjet { get; set; }
        public DbSet<Ambienti> Ambientet { get; set; }

        public DbSet<Kontrata> Kontratat { get; set; }
        public DbSet<Kafshet> Kafsha { get; set; }
        public DbSet<Pajisja> Pajisjet { get; set; }
        public DbSet<LlojiShtepise> LlojiShtepive { get; set; }

        public DbSet<MenyraPageses> MenyraPagesave { get; set; }
        public DbSet<Rezervimi> Rezervimet { get; set; }
        public DbSet<Shtepia> Shtepiat { get; set; }
     
    public DbSet<Comment> Comments{get;set;}
            public DbSet<ShtepiaAmbiente> ShtepiatAmbientet { get; set; }
        public DbSet<ShtepiaPajisjet> ShtepiaPajisjets { get; set; }
       
       
        public DbSet<Photo> Photos { get; set; }
        

        
       



        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer("A FALLBACK CONNECTION STRING");
            }
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
             builder.Entity<AppUser>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            //One to many(shteti dhe qyteti)
       

            // builder.Entity<Qyteti>()
            //     .HasOne(s => s.Shteti)
            //     .WithMany(q => q.Qytetet)
            //      .OnDelete(DeleteBehavior.Cascade);
builder.Entity<Shteti>()
        .HasMany(c => c.Qytetet)
        .WithOne(e => e.Shteti)
 .IsRequired();
            builder.Entity<Lagjja>()
                .HasOne(q => q.Qyteti)
                .WithMany(l => l.Lagjet)
                .HasForeignKey(q => q.QytetiId);

//  builder.Entity<Rezervimi>()
//                 .HasOne(s => s.Author)
//                 .WithMany(q => q.Rezervimet)
//                 .HasForeignKey(s => s.);
   builder.Entity<Rezervimi>()
            .HasOne(a=>a.AppUser)
            .WithMany(c=>c.Rezervimet)
            .OnDelete(DeleteBehavior.Cascade);

           
            

            //---------------Stafi------------




            builder.Entity<Stafi>()
                .HasOne(q => q.RoliUser)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.RoliId);

            builder.Entity<Stafi>()
                .HasOne(s => s.Shteti)
                .WithMany(q => q.Stafii)
                .HasForeignKey(s => s.ShtetiId);


            builder.Entity<Stafi>()
                .HasOne(q => q.Qyteti)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.QytetiId);

            builder.Entity<Stafi>()
                .HasOne(s => s.LlojiUser)
                .WithMany(q => q.Stafii)
                .HasForeignKey(s => s.LlojiUserId);

            builder.Entity<Stafi>()
                .HasOne(q => q.KohaEPunes)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.KohaId);

            builder.Entity<Stafi>()
                .HasOne(q => q.Gjinia)
                .WithMany(l => l.Stafii)
                .OnDelete(DeleteBehavior.Cascade);



// Map one-to-zero or one relationship


            //------SHTEPIA-------



            //-- lidhje shum me shum--
            builder.Entity<ShtepiaAmbiente>(x => x.HasKey(aa => new { aa.AmbientiId, aa.ShtepiaId }));

            builder.Entity<ShtepiaAmbiente>()
            .HasOne(u => u.Ambienti)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.AmbientiId);


            builder.Entity<ShtepiaAmbiente>()
            .HasOne(u => u.Shtepia)
            .WithMany(a => a.Ambientet)
            .HasForeignKey(aa => aa.ShtepiaId);


            builder.Entity<ShtepiaPajisjet>(x => x.HasKey(aa => new { aa.PajisjaId, aa.ShtepiaId }));

            builder.Entity<ShtepiaPajisjet>()
            .HasOne(u => u.Pajisja)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.PajisjaId);


            builder.Entity<ShtepiaPajisjet>()
            .HasOne(u => u.Shtepia)
            .WithMany(a => a.Pajisjet)
            .HasForeignKey(aa => aa.ShtepiaId);
     builder.Entity<Comment>()
            .HasOne(a=>a.Shtepia)
            .WithMany(c=>c.Comments)
            .OnDelete(DeleteBehavior.Cascade);

            //---------------------
            
        


            //--perfundojne lidhjet shum me shum


            builder.Entity<Shtepia>()
                .HasOne(q => q.LlojiShtepise)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.LlojiShtepiseId);

            builder.Entity<Shtepia>()
                .HasOne(q => q.GjendjaShtepise)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.GjendjaShtepiseId);


            builder.Entity<Shtepia>()
                .HasOne(q => q.Kafshet)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.KafshetId);


            builder.Entity<Shtepia>()
                .HasOne(q => q.Pamja)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.PamjaId);

      

             builder.Entity<Shtepia>()
                .HasOne(s => s.Qyteti)
                .WithMany(q => q.Shtepite)
                .HasForeignKey(s => s.QytetiId);

                builder.Entity<Shtepia>()
                .HasOne(s => s.Stafi)
                .WithMany(q => q.Shtepite)
                .HasForeignKey(s => s.StafiId);
            
             builder.Entity<Shtepia>()
            .HasOne(u => u.Lagjja)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.LagjjaId);



            //Rezervimi
            // builder.Entity<Rezervimi>()
            //     .HasOne(s => s.MenyraPageses)
            //     .WithMany(q => q.Rezervimet)
            //     .HasForeignKey(s => s.MenyraPagesesId);

            //     builder.Entity<Rezervimi>()
            //     .HasOne(s => s.Kontrata)
            //     .WithMany(q => q.Rezervimet)
            //     .HasForeignKey(s => s.KontrataId);
     

//------------------------------------------------

                // builder.Entity<Rezervimi>(x=>x.HasKey(aa=>new {aa.AppUserId, aa.ShtepiaId}));
                // builder.Entity<Rezervimi>()
                // .HasOne(s => s.AppUser)
                // .WithMany(q => q.Shtepite)
                // .HasForeignKey(s => s.AppUserId);

                //  builder.Entity<Rezervimi>()
                // .HasOne(s => s.Shtepia)
                // .WithMany(q => q.Attendees)
                // .HasForeignKey(s => s.ShtepiaId);




// -------------------------------- Rezervimi dhe AppUser


                // builder.Entity<RezervimiAttendee>(x=>x.HasKey(aa=>new {aa.AppUserId, aa.RezervimiId}));
                // builder.Entity<RezervimiAttendee>()
                // .HasOne(u => u.AppUser)
                // .WithMany(a => a.Rezervimi)
                // .HasForeignKey(s => s.AppUserId);

                //  builder.Entity<RezervimiAttendee>()
                // .HasOne(u => u.Rezervimi)
                // .WithMany(a => a.Attendees)
                // .HasForeignKey(s => s.RezervimiId);

                //  builder.Entity<Rezervimi>()
                // .HasOne(u => u.Shtepia)
                // .WithMany(q => q.Attendees)
                // .HasForeignKey(aa => aa.RezervimiId);

                //      builder.Entity<Rezervimi>()
                // .HasOne(s => s.AppUser)
                // .WithMany(q => q.Rezervimet)
                // .HasForeignKey(s => s.AppUserId);
        }


    }
}