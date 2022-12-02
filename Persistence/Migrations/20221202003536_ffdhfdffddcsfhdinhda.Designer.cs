﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221202003536_ffdhfdffddcsfhdinhda")]
    partial class ffdhfdffddcsfhdinhda
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Domain.Ambienti", b =>
                {
                    b.Property<Guid>("AmbientiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiAmbient")
                        .HasColumnType("TEXT");

                    b.HasKey("AmbientiId");

                    b.ToTable("Ambientet");
                });

            modelBuilder.Entity("Domain.AppRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("DisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PhotoId")
                        .HasColumnType("TEXT");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.HasIndex("PhotoId");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Domain.AppUserRole", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("RoleId1")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("UserId1")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.HasIndex("RoleId1");

                    b.HasIndex("UserId1");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Domain.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<Guid?>("AuthorId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Body")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ShtepiaId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("ShtepiaId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Domain.GjendjaShtepise", b =>
                {
                    b.Property<Guid>("GjendjaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Gjendja")
                        .HasColumnType("TEXT");

                    b.HasKey("GjendjaId");

                    b.ToTable("Gjendjet");
                });

            modelBuilder.Entity("Domain.Gjinia", b =>
                {
                    b.Property<Guid>("GjiniaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Lloji")
                        .HasColumnType("TEXT");

                    b.HasKey("GjiniaId");

                    b.ToTable("Gjinite");
                });

            modelBuilder.Entity("Domain.Kafshet", b =>
                {
                    b.Property<Guid>("KafshetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LejohenKafshet")
                        .HasColumnType("TEXT");

                    b.HasKey("KafshetId");

                    b.ToTable("Kafsha");
                });

            modelBuilder.Entity("Domain.KohaEPunes", b =>
                {
                    b.Property<Guid>("KohaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Koha")
                        .HasColumnType("TEXT");

                    b.Property<string>("KohaEPuness")
                        .HasColumnType("TEXT");

                    b.HasKey("KohaId");

                    b.ToTable("Kohaa");
                });

            modelBuilder.Entity("Domain.Kontrata", b =>
                {
                    b.Property<Guid>("KontrataId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiKontrates")
                        .HasColumnType("TEXT");

                    b.HasKey("KontrataId");

                    b.ToTable("Kontratat");
                });

            modelBuilder.Entity("Domain.Lagjja", b =>
                {
                    b.Property<Guid>("LagjjaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("QytetiId")
                        .HasColumnType("TEXT");

                    b.HasKey("LagjjaId");

                    b.HasIndex("QytetiId");

                    b.ToTable("Lagjet");
                });

            modelBuilder.Entity("Domain.LlojiShtepise", b =>
                {
                    b.Property<Guid>("LlojiShtepiseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiiShtepise")
                        .HasColumnType("TEXT");

                    b.HasKey("LlojiShtepiseId");

                    b.ToTable("LlojiShtepive");
                });

            modelBuilder.Entity("Domain.LlojiUser", b =>
                {
                    b.Property<Guid>("LlojiUserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Lloji")
                        .HasColumnType("TEXT");

                    b.HasKey("LlojiUserId");

                    b.ToTable("LlojeteUserit");
                });

            modelBuilder.Entity("Domain.MenyraPageses", b =>
                {
                    b.Property<Guid>("MenyraPagesesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("MenyraePageses")
                        .HasColumnType("TEXT");

                    b.HasKey("MenyraPagesesId");

                    b.ToTable("MenyraPagesave");
                });

            modelBuilder.Entity("Domain.Pajisja", b =>
                {
                    b.Property<Guid>("PajisjaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiPajisjes")
                        .HasColumnType("TEXT");

                    b.HasKey("PajisjaId");

                    b.ToTable("Pajisjet");
                });

            modelBuilder.Entity("Domain.Pamja", b =>
                {
                    b.Property<Guid>("PamjaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Pamjaa")
                        .HasColumnType("TEXT");

                    b.HasKey("PamjaId");

                    b.ToTable("Pamjet");
                });

            modelBuilder.Entity("Domain.Photo", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AppUserId")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsMain")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Url")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("AppUserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.Property<Guid>("QytetiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("KodiPostar")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("ShtetiId")
                        .HasColumnType("TEXT");

                    b.HasKey("QytetiId");

                    b.HasIndex("ShtetiId");

                    b.ToTable("Qytetet");
                });

            modelBuilder.Entity("Domain.Rezervimi", b =>
                {
                    b.Property<Guid>("RezervimiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AppUserId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Check_in")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Check_out")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("KontrataId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("MenyraPagesesId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pagesa")
                        .HasColumnType("TEXT");

                    b.Property<string>("nrPersonave")
                        .HasColumnType("TEXT");

                    b.HasKey("RezervimiId");

                    b.HasIndex("AppUserId");

                    b.HasIndex("KontrataId");

                    b.HasIndex("MenyraPagesesId");

                    b.ToTable("Rezervimet");
                });

            modelBuilder.Entity("Domain.RoliUser", b =>
                {
                    b.Property<Guid>("RoliId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Roli")
                        .HasColumnType("TEXT");

                    b.HasKey("RoliId");

                    b.ToTable("Rolet");
                });

            modelBuilder.Entity("Domain.Shtepia", b =>
                {
                    b.Property<Guid>("ShtepiaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Cmimi")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("GjendjaShtepiseId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("KafshetId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("LagjjaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("LlojiShtepiseId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("NrBanjove")
                        .HasColumnType("TEXT");

                    b.Property<string>("NrDhomave")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("PamjaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo4")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("QytetiId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Siperfaqja")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("StafiId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.HasKey("ShtepiaId");

                    b.HasIndex("GjendjaShtepiseId");

                    b.HasIndex("KafshetId");

                    b.HasIndex("LagjjaId");

                    b.HasIndex("LlojiShtepiseId");

                    b.HasIndex("PamjaId");

                    b.HasIndex("QytetiId");

                    b.HasIndex("StafiId");

                    b.ToTable("Shtepiat");
                });

            modelBuilder.Entity("Domain.ShtepiaAmbiente", b =>
                {
                    b.Property<Guid?>("AmbientiId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ShtepiaId")
                        .HasColumnType("TEXT");

                    b.HasKey("AmbientiId", "ShtepiaId");

                    b.HasIndex("ShtepiaId");

                    b.ToTable("ShtepiatAmbientet");
                });

            modelBuilder.Entity("Domain.ShtepiaPajisjet", b =>
                {
                    b.Property<Guid?>("PajisjaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("ShtepiaId")
                        .HasColumnType("TEXT");

                    b.HasKey("PajisjaId", "ShtepiaId");

                    b.HasIndex("ShtepiaId");

                    b.ToTable("ShtepiaPajisjets");
                });

            modelBuilder.Entity("Domain.Shteti", b =>
                {
                    b.Property<Guid>("ShtetiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("Shkurtesa")
                        .HasColumnType("TEXT");

                    b.HasKey("ShtetiId");

                    b.ToTable("Shtetet");
                });

            modelBuilder.Entity("Domain.Stafi", b =>
                {
                    b.Property<Guid>("StafiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Adresa")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("GjiniaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("KohaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("LlojiUserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("NrTelefonit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("QytetiId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("RoliId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ShtetiId")
                        .HasColumnType("TEXT");

                    b.HasKey("StafiId");

                    b.HasIndex("GjiniaId");

                    b.HasIndex("KohaId");

                    b.HasIndex("LlojiUserId");

                    b.HasIndex("QytetiId");

                    b.HasIndex("RoliId");

                    b.HasIndex("ShtetiId");

                    b.ToTable("Stafii");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<System.Guid>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.HasOne("Domain.Photo", "Photo")
                        .WithMany()
                        .HasForeignKey("PhotoId");

                    b.Navigation("Photo");
                });

            modelBuilder.Entity("Domain.AppUserRole", b =>
                {
                    b.HasOne("Domain.AppRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.AppRole", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId1");

                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId1");

                    b.Navigation("Role");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Comment", b =>
                {
                    b.HasOne("Domain.AppUser", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId");

                    b.HasOne("Domain.Shtepia", "Shtepia")
                        .WithMany("Comments")
                        .HasForeignKey("ShtepiaId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("Author");

                    b.Navigation("Shtepia");
                });

            modelBuilder.Entity("Domain.Lagjja", b =>
                {
                    b.HasOne("Domain.Qyteti", "Qyteti")
                        .WithMany("Lagjet")
                        .HasForeignKey("QytetiId");

                    b.Navigation("Qyteti");
                });

            modelBuilder.Entity("Domain.Photo", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany("Photos")
                        .HasForeignKey("AppUserId");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.HasOne("Domain.Shteti", "Shteti")
                        .WithMany("Qytetet")
                        .HasForeignKey("ShtetiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Shteti");
                });

            modelBuilder.Entity("Domain.Rezervimi", b =>
                {
                    b.HasOne("Domain.AppUser", "AppUser")
                        .WithMany("Rezervimet")
                        .HasForeignKey("AppUserId");

                    b.HasOne("Domain.Kontrata", null)
                        .WithMany("Rezervimet")
                        .HasForeignKey("KontrataId");

                    b.HasOne("Domain.MenyraPageses", null)
                        .WithMany("Rezervimet")
                        .HasForeignKey("MenyraPagesesId");

                    b.Navigation("AppUser");
                });

            modelBuilder.Entity("Domain.Shtepia", b =>
                {
                    b.HasOne("Domain.GjendjaShtepise", "GjendjaShtepise")
                        .WithMany("Shtepite")
                        .HasForeignKey("GjendjaShtepiseId");

                    b.HasOne("Domain.Kafshet", "Kafshet")
                        .WithMany("Shtepite")
                        .HasForeignKey("KafshetId");

                    b.HasOne("Domain.Lagjja", "Lagjja")
                        .WithMany("Shtepite")
                        .HasForeignKey("LagjjaId");

                    b.HasOne("Domain.LlojiShtepise", "LlojiShtepise")
                        .WithMany("Shtepite")
                        .HasForeignKey("LlojiShtepiseId");

                    b.HasOne("Domain.Pamja", "Pamja")
                        .WithMany("Shtepite")
                        .HasForeignKey("PamjaId");

                    b.HasOne("Domain.Qyteti", "Qyteti")
                        .WithMany("Shtepite")
                        .HasForeignKey("QytetiId");

                    b.HasOne("Domain.Stafi", "Stafi")
                        .WithMany("Shtepite")
                        .HasForeignKey("StafiId");

                    b.Navigation("GjendjaShtepise");

                    b.Navigation("Kafshet");

                    b.Navigation("Lagjja");

                    b.Navigation("LlojiShtepise");

                    b.Navigation("Pamja");

                    b.Navigation("Qyteti");

                    b.Navigation("Stafi");
                });

            modelBuilder.Entity("Domain.ShtepiaAmbiente", b =>
                {
                    b.HasOne("Domain.Ambienti", "Ambienti")
                        .WithMany("Shtepite")
                        .HasForeignKey("AmbientiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Shtepia", "Shtepia")
                        .WithMany("Ambientet")
                        .HasForeignKey("ShtepiaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Ambienti");

                    b.Navigation("Shtepia");
                });

            modelBuilder.Entity("Domain.ShtepiaPajisjet", b =>
                {
                    b.HasOne("Domain.Pajisja", "Pajisja")
                        .WithMany("Shtepite")
                        .HasForeignKey("PajisjaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Shtepia", "Shtepia")
                        .WithMany("Pajisjet")
                        .HasForeignKey("ShtepiaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pajisja");

                    b.Navigation("Shtepia");
                });

            modelBuilder.Entity("Domain.Stafi", b =>
                {
                    b.HasOne("Domain.Gjinia", "Gjinia")
                        .WithMany("Stafii")
                        .HasForeignKey("GjiniaId");

                    b.HasOne("Domain.KohaEPunes", "KohaEPunes")
                        .WithMany("Stafii")
                        .HasForeignKey("KohaId");

                    b.HasOne("Domain.LlojiUser", "LlojiUser")
                        .WithMany("Stafii")
                        .HasForeignKey("LlojiUserId");

                    b.HasOne("Domain.Qyteti", "Qyteti")
                        .WithMany("Stafii")
                        .HasForeignKey("QytetiId");

                    b.HasOne("Domain.RoliUser", "RoliUser")
                        .WithMany("Stafii")
                        .HasForeignKey("RoliId");

                    b.HasOne("Domain.Shteti", "Shteti")
                        .WithMany("Stafii")
                        .HasForeignKey("ShtetiId");

                    b.Navigation("Gjinia");

                    b.Navigation("KohaEPunes");

                    b.Navigation("LlojiUser");

                    b.Navigation("Qyteti");

                    b.Navigation("RoliUser");

                    b.Navigation("Shteti");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<System.Guid>", b =>
                {
                    b.HasOne("Domain.AppRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<System.Guid>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<System.Guid>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<System.Guid>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Ambienti", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.AppRole", b =>
                {
                    b.Navigation("UserRoles");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Navigation("Photos");

                    b.Navigation("Rezervimet");

                    b.Navigation("UserRoles");
                });

            modelBuilder.Entity("Domain.GjendjaShtepise", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.Gjinia", b =>
                {
                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.Kafshet", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.KohaEPunes", b =>
                {
                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.Kontrata", b =>
                {
                    b.Navigation("Rezervimet");
                });

            modelBuilder.Entity("Domain.Lagjja", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.LlojiShtepise", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.LlojiUser", b =>
                {
                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.MenyraPageses", b =>
                {
                    b.Navigation("Rezervimet");
                });

            modelBuilder.Entity("Domain.Pajisja", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.Pamja", b =>
                {
                    b.Navigation("Shtepite");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.Navigation("Lagjet");

                    b.Navigation("Shtepite");

                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.RoliUser", b =>
                {
                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.Shtepia", b =>
                {
                    b.Navigation("Ambientet");

                    b.Navigation("Comments");

                    b.Navigation("Pajisjet");
                });

            modelBuilder.Entity("Domain.Shteti", b =>
                {
                    b.Navigation("Qytetet");

                    b.Navigation("Stafii");
                });

            modelBuilder.Entity("Domain.Stafi", b =>
                {
                    b.Navigation("Shtepite");
                });
#pragma warning restore 612, 618
        }
    }
}
