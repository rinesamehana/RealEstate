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

         
   public DbSet<AppUser> Users { get; set; }
        public DbSet<RezervimiAttendee> RezervimiAttendees{get; set;}
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
        public DbSet<Rezervimi> Rezervimi { get; set; }
        public DbSet<Shtepia> Shtepiat { get; set; }
     
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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            
             modelBuilder.Entity<AppUser>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            modelBuilder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            //One to many(shteti dhe qyteti)
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Qyteti>()
                .HasOne(s => s.Shteti)
                .WithMany(q => q.Qytetet)
                .HasForeignKey(s => s.ShtetiId);

            modelBuilder.Entity<Lagjja>()
                .HasOne(q => q.Qyteti)
                .WithMany(l => l.Lagjet)
                .HasForeignKey(q => q.QytetiId);

 modelBuilder.Entity<Rezervimi>()
                .HasOne(s => s.AppUser)
                .WithMany(q => q.Rezervimet)
                .HasForeignKey(s => s.AppUserId);

            //---------------Stafi------------




            modelBuilder.Entity<Stafi>()
                .HasOne(q => q.RoliUser)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.RoliId);

            modelBuilder.Entity<Stafi>()
                .HasOne(s => s.Shteti)
                .WithMany(q => q.Stafii)
                .HasForeignKey(s => s.ShtetiId);


            modelBuilder.Entity<Stafi>()
                .HasOne(q => q.Qyteti)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.QytetiId);

            modelBuilder.Entity<Stafi>()
                .HasOne(s => s.LlojiUser)
                .WithMany(q => q.Stafii)
                .HasForeignKey(s => s.LlojiUserId);

            modelBuilder.Entity<Stafi>()
                .HasOne(q => q.KohaEPunes)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.KohaId);

            modelBuilder.Entity<Stafi>()
                .HasOne(q => q.Gjinia)
                .WithMany(l => l.Stafii)
                .HasForeignKey(q => q.GjiniaId);



            //------SHTEPIA-------



            //-- lidhje shum me shum--
            modelBuilder.Entity<ShtepiaAmbiente>(x => x.HasKey(aa => new { aa.AmbientiId, aa.ShtepiaId }));

            modelBuilder.Entity<ShtepiaAmbiente>()
            .HasOne(u => u.Ambienti)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.AmbientiId);


            modelBuilder.Entity<ShtepiaAmbiente>()
            .HasOne(u => u.Shtepia)
            .WithMany(a => a.Ambientet)
            .HasForeignKey(aa => aa.ShtepiaId);


            modelBuilder.Entity<ShtepiaPajisjet>(x => x.HasKey(aa => new { aa.PajisjaId, aa.ShtepiaId }));

            modelBuilder.Entity<ShtepiaPajisjet>()
            .HasOne(u => u.Pajisja)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.PajisjaId);


            modelBuilder.Entity<ShtepiaPajisjet>()
            .HasOne(u => u.Shtepia)
            .WithMany(a => a.Pajisjet)
            .HasForeignKey(aa => aa.ShtepiaId);


            //---------------------
            
        


            //--perfundojne lidhjet shum me shum


            modelBuilder.Entity<Shtepia>()
                .HasOne(q => q.LlojiShtepise)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.LlojiShtepiseId);

            modelBuilder.Entity<Shtepia>()
                .HasOne(q => q.GjendjaShtepise)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.GjendjaShtepiseId);


            modelBuilder.Entity<Shtepia>()
                .HasOne(q => q.Kafshet)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.KafshetId);


            modelBuilder.Entity<Shtepia>()
                .HasOne(q => q.Pamja)
                .WithMany(l => l.Shtepite)
                .HasForeignKey(q => q.PamjaId);

      

             modelBuilder.Entity<Shtepia>()
                .HasOne(s => s.Qyteti)
                .WithMany(q => q.Shtepite)
                .HasForeignKey(s => s.QytetiId);

                modelBuilder.Entity<Shtepia>()
                .HasOne(s => s.Stafi)
                .WithMany(q => q.Shtepite)
                .HasForeignKey(s => s.StafiId);
            
             modelBuilder.Entity<Shtepia>()
            .HasOne(u => u.Lagjja)
            .WithMany(a => a.Shtepite)
            .HasForeignKey(aa => aa.LagjjaId);



            //Rezervimi
            modelBuilder.Entity<Rezervimi>()
                .HasOne(s => s.MenyraPageses)
                .WithMany(q => q.Rezervimet)
                .HasForeignKey(s => s.MenyraPagesesId);

                modelBuilder.Entity<Rezervimi>()
                .HasOne(s => s.Kontrata)
                .WithMany(q => q.Rezervimet)
                .HasForeignKey(s => s.KontrataId);
     

//------------------------------------------------

                // modelBuilder.Entity<Rezervimi>(x=>x.HasKey(aa=>new {aa.AppUserId, aa.ShtepiaId}));
                // modelBuilder.Entity<Rezervimi>()
                // .HasOne(s => s.AppUser)
                // .WithMany(q => q.Shtepite)
                // .HasForeignKey(s => s.AppUserId);

                //  modelBuilder.Entity<Rezervimi>()
                // .HasOne(s => s.Shtepia)
                // .WithMany(q => q.Attendees)
                // .HasForeignKey(s => s.ShtepiaId);




// -------------------------------- Rezervimi dhe AppUser


                modelBuilder.Entity<RezervimiAttendee>(x=>x.HasKey(aa=>new {aa.AppUserId, aa.RezervimiId}));
                modelBuilder.Entity<RezervimiAttendee>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Rezervimi)
                .HasForeignKey(s => s.AppUserId);

                 modelBuilder.Entity<RezervimiAttendee>()
                .HasOne(u => u.Rezervimi)
                .WithMany(a => a.Attendees)
                .HasForeignKey(s => s.RezervimiId);

                //  modelBuilder.Entity<Rezervimi>()
                // .HasOne(u => u.Shtepia)
                // .WithMany(q => q.Attendees)
                // .HasForeignKey(aa => aa.RezervimiId);
        }


    }
}