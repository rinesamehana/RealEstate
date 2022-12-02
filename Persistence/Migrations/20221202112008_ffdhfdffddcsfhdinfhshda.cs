using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ffdhfdffddcsfhdinfhshda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervimet_AspNetUsers_AppUserId",
                table: "Rezervimet");

            migrationBuilder.AddColumn<string>(
                name: "Kontrata",
                table: "Rezervimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervimet_AspNetUsers_AppUserId",
                table: "Rezervimet",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervimet_AspNetUsers_AppUserId",
                table: "Rezervimet");

            migrationBuilder.DropColumn(
                name: "Kontrata",
                table: "Rezervimet");

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervimet_AspNetUsers_AppUserId",
                table: "Rezervimet",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
