using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class fina : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ambientet",
                columns: table => new
                {
                    AmbientiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LlojiAmbient = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ambientet", x => x.AmbientiId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    DisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Gjendjet",
                columns: table => new
                {
                    GjendjaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Gjendja = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gjendjet", x => x.GjendjaId);
                });

            migrationBuilder.CreateTable(
                name: "Gjinite",
                columns: table => new
                {
                    GjiniaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Lloji = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gjinite", x => x.GjiniaId);
                });

            migrationBuilder.CreateTable(
                name: "Kafsha",
                columns: table => new
                {
                    KafshetId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LejohenKafshet = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kafsha", x => x.KafshetId);
                });

            migrationBuilder.CreateTable(
                name: "Kohaa",
                columns: table => new
                {
                    KohaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    KohaEPuness = table.Column<string>(type: "TEXT", nullable: true),
                    Koha = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kohaa", x => x.KohaId);
                });

            migrationBuilder.CreateTable(
                name: "Kontratat",
                columns: table => new
                {
                    KontrataId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LlojiKontrates = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kontratat", x => x.KontrataId);
                });

            migrationBuilder.CreateTable(
                name: "LlojeteUserit",
                columns: table => new
                {
                    LlojiUserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Lloji = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LlojeteUserit", x => x.LlojiUserId);
                });

            migrationBuilder.CreateTable(
                name: "LlojiShtepive",
                columns: table => new
                {
                    LlojiShtepiseId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LlojiiShtepise = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LlojiShtepive", x => x.LlojiShtepiseId);
                });

            migrationBuilder.CreateTable(
                name: "MenyraPagesave",
                columns: table => new
                {
                    MenyraPagesesId = table.Column<Guid>(type: "TEXT", nullable: false),
                    MenyraePageses = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenyraPagesave", x => x.MenyraPagesesId);
                });

            migrationBuilder.CreateTable(
                name: "Pajisjet",
                columns: table => new
                {
                    PajisjaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LlojiPajisjes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pajisjet", x => x.PajisjaId);
                });

            migrationBuilder.CreateTable(
                name: "Pamjet",
                columns: table => new
                {
                    PamjaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Pamjaa = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pamjet", x => x.PamjaId);
                });

            migrationBuilder.CreateTable(
                name: "Rolet",
                columns: table => new
                {
                    RoliId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Roli = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rolet", x => x.RoliId);
                });

            migrationBuilder.CreateTable(
                name: "Shtetet",
                columns: table => new
                {
                    ShtetiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Shkurtesa = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shtetet", x => x.ShtetiId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderKey = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    RoleId = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserId1 = table.Column<Guid>(type: "TEXT", nullable: true),
                    RoleId1 = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId1",
                        column: x => x.RoleId1,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Url = table.Column<string>(type: "TEXT", nullable: true),
                    IsMain = table.Column<bool>(type: "INTEGER", nullable: false),
                    AppUserId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Rezervimet",
                columns: table => new
                {
                    RezervimiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Check_in = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Check_out = table.Column<DateTime>(type: "TEXT", nullable: false),
                    nrPersonave = table.Column<string>(type: "TEXT", nullable: true),
                    Pagesa = table.Column<string>(type: "TEXT", nullable: true),
                    AppUserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    KontrataId = table.Column<Guid>(type: "TEXT", nullable: true),
                    MenyraPagesesId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rezervimet", x => x.RezervimiId);
                    table.ForeignKey(
                        name: "FK_Rezervimet_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rezervimet_Kontratat_KontrataId",
                        column: x => x.KontrataId,
                        principalTable: "Kontratat",
                        principalColumn: "KontrataId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rezervimet_MenyraPagesave_MenyraPagesesId",
                        column: x => x.MenyraPagesesId,
                        principalTable: "MenyraPagesave",
                        principalColumn: "MenyraPagesesId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Qytetet",
                columns: table => new
                {
                    QytetiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Photo = table.Column<string>(type: "TEXT", nullable: true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    KodiPostar = table.Column<string>(type: "TEXT", nullable: true),
                    ShtetiId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qytetet", x => x.QytetiId);
                    table.ForeignKey(
                        name: "FK_Qytetet_Shtetet_ShtetiId",
                        column: x => x.ShtetiId,
                        principalTable: "Shtetet",
                        principalColumn: "ShtetiId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Lagjet",
                columns: table => new
                {
                    LagjjaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    QytetiId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lagjet", x => x.LagjjaId);
                    table.ForeignKey(
                        name: "FK_Lagjet_Qytetet_QytetiId",
                        column: x => x.QytetiId,
                        principalTable: "Qytetet",
                        principalColumn: "QytetiId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Stafii",
                columns: table => new
                {
                    StafiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    NrTelefonit = table.Column<string>(type: "TEXT", nullable: true),
                    RoliId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LlojiUserId = table.Column<Guid>(type: "TEXT", nullable: true),
                    KohaId = table.Column<Guid>(type: "TEXT", nullable: true),
                    GjiniaId = table.Column<Guid>(type: "TEXT", nullable: true),
                    QytetiId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ShtetiId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Adresa = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stafii", x => x.StafiId);
                    table.ForeignKey(
                        name: "FK_Stafii_Gjinite_GjiniaId",
                        column: x => x.GjiniaId,
                        principalTable: "Gjinite",
                        principalColumn: "GjiniaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stafii_Kohaa_KohaId",
                        column: x => x.KohaId,
                        principalTable: "Kohaa",
                        principalColumn: "KohaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stafii_LlojeteUserit_LlojiUserId",
                        column: x => x.LlojiUserId,
                        principalTable: "LlojeteUserit",
                        principalColumn: "LlojiUserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stafii_Qytetet_QytetiId",
                        column: x => x.QytetiId,
                        principalTable: "Qytetet",
                        principalColumn: "QytetiId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stafii_Rolet_RoliId",
                        column: x => x.RoliId,
                        principalTable: "Rolet",
                        principalColumn: "RoliId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stafii_Shtetet_ShtetiId",
                        column: x => x.ShtetiId,
                        principalTable: "Shtetet",
                        principalColumn: "ShtetiId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Shtepiat",
                columns: table => new
                {
                    ShtepiaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Photo = table.Column<string>(type: "TEXT", nullable: true),
                    Photo2 = table.Column<string>(type: "TEXT", nullable: true),
                    Photo3 = table.Column<string>(type: "TEXT", nullable: true),
                    Photo4 = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    Cmimi = table.Column<string>(type: "TEXT", nullable: true),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    NrDhomave = table.Column<string>(type: "TEXT", nullable: true),
                    NrBanjove = table.Column<string>(type: "TEXT", nullable: true),
                    Siperfaqja = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    LagjjaId = table.Column<Guid>(type: "TEXT", nullable: true),
                    QytetiId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LlojiShtepiseId = table.Column<Guid>(type: "TEXT", nullable: true),
                    GjendjaShtepiseId = table.Column<Guid>(type: "TEXT", nullable: true),
                    PamjaId = table.Column<Guid>(type: "TEXT", nullable: true),
                    KafshetId = table.Column<Guid>(type: "TEXT", nullable: true),
                    StafiId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shtepiat", x => x.ShtepiaId);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Gjendjet_GjendjaShtepiseId",
                        column: x => x.GjendjaShtepiseId,
                        principalTable: "Gjendjet",
                        principalColumn: "GjendjaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Kafsha_KafshetId",
                        column: x => x.KafshetId,
                        principalTable: "Kafsha",
                        principalColumn: "KafshetId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Lagjet_LagjjaId",
                        column: x => x.LagjjaId,
                        principalTable: "Lagjet",
                        principalColumn: "LagjjaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_LlojiShtepive_LlojiShtepiseId",
                        column: x => x.LlojiShtepiseId,
                        principalTable: "LlojiShtepive",
                        principalColumn: "LlojiShtepiseId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Pamjet_PamjaId",
                        column: x => x.PamjaId,
                        principalTable: "Pamjet",
                        principalColumn: "PamjaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Qytetet_QytetiId",
                        column: x => x.QytetiId,
                        principalTable: "Qytetet",
                        principalColumn: "QytetiId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shtepiat_Stafii_StafiId",
                        column: x => x.StafiId,
                        principalTable: "Stafii",
                        principalColumn: "StafiId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ShtepiaPajisjets",
                columns: table => new
                {
                    ShtepiaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    PajisjaId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShtepiaPajisjets", x => new { x.PajisjaId, x.ShtepiaId });
                    table.ForeignKey(
                        name: "FK_ShtepiaPajisjets_Pajisjet_PajisjaId",
                        column: x => x.PajisjaId,
                        principalTable: "Pajisjet",
                        principalColumn: "PajisjaId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShtepiaPajisjets_Shtepiat_ShtepiaId",
                        column: x => x.ShtepiaId,
                        principalTable: "Shtepiat",
                        principalColumn: "ShtepiaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShtepiatAmbientet",
                columns: table => new
                {
                    ShtepiaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    AmbientiId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShtepiatAmbientet", x => new { x.AmbientiId, x.ShtepiaId });
                    table.ForeignKey(
                        name: "FK_ShtepiatAmbientet_Ambientet_AmbientiId",
                        column: x => x.AmbientiId,
                        principalTable: "Ambientet",
                        principalColumn: "AmbientiId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShtepiatAmbientet_Shtepiat_ShtepiaId",
                        column: x => x.ShtepiaId,
                        principalTable: "Shtepiat",
                        principalColumn: "ShtepiaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId1",
                table: "AspNetUserRoles",
                column: "RoleId1");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_UserId1",
                table: "AspNetUserRoles",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Lagjet_QytetiId",
                table: "Lagjet",
                column: "QytetiId");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_AppUserId",
                table: "Photos",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Qytetet_ShtetiId",
                table: "Qytetet",
                column: "ShtetiId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervimet_AppUserId",
                table: "Rezervimet",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervimet_KontrataId",
                table: "Rezervimet",
                column: "KontrataId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervimet_MenyraPagesesId",
                table: "Rezervimet",
                column: "MenyraPagesesId");

            migrationBuilder.CreateIndex(
                name: "IX_ShtepiaPajisjets_ShtepiaId",
                table: "ShtepiaPajisjets",
                column: "ShtepiaId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_GjendjaShtepiseId",
                table: "Shtepiat",
                column: "GjendjaShtepiseId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_KafshetId",
                table: "Shtepiat",
                column: "KafshetId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_LagjjaId",
                table: "Shtepiat",
                column: "LagjjaId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_LlojiShtepiseId",
                table: "Shtepiat",
                column: "LlojiShtepiseId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_PamjaId",
                table: "Shtepiat",
                column: "PamjaId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_QytetiId",
                table: "Shtepiat",
                column: "QytetiId");

            migrationBuilder.CreateIndex(
                name: "IX_Shtepiat_StafiId",
                table: "Shtepiat",
                column: "StafiId");

            migrationBuilder.CreateIndex(
                name: "IX_ShtepiatAmbientet_ShtepiaId",
                table: "ShtepiatAmbientet",
                column: "ShtepiaId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_GjiniaId",
                table: "Stafii",
                column: "GjiniaId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_KohaId",
                table: "Stafii",
                column: "KohaId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_LlojiUserId",
                table: "Stafii",
                column: "LlojiUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_QytetiId",
                table: "Stafii",
                column: "QytetiId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_RoliId",
                table: "Stafii",
                column: "RoliId");

            migrationBuilder.CreateIndex(
                name: "IX_Stafii_ShtetiId",
                table: "Stafii",
                column: "ShtetiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Rezervimet");

            migrationBuilder.DropTable(
                name: "ShtepiaPajisjets");

            migrationBuilder.DropTable(
                name: "ShtepiatAmbientet");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Kontratat");

            migrationBuilder.DropTable(
                name: "MenyraPagesave");

            migrationBuilder.DropTable(
                name: "Pajisjet");

            migrationBuilder.DropTable(
                name: "Ambientet");

            migrationBuilder.DropTable(
                name: "Shtepiat");

            migrationBuilder.DropTable(
                name: "Gjendjet");

            migrationBuilder.DropTable(
                name: "Kafsha");

            migrationBuilder.DropTable(
                name: "Lagjet");

            migrationBuilder.DropTable(
                name: "LlojiShtepive");

            migrationBuilder.DropTable(
                name: "Pamjet");

            migrationBuilder.DropTable(
                name: "Stafii");

            migrationBuilder.DropTable(
                name: "Gjinite");

            migrationBuilder.DropTable(
                name: "Kohaa");

            migrationBuilder.DropTable(
                name: "LlojeteUserit");

            migrationBuilder.DropTable(
                name: "Qytetet");

            migrationBuilder.DropTable(
                name: "Rolet");

            migrationBuilder.DropTable(
                name: "Shtetet");
        }
    }
}
