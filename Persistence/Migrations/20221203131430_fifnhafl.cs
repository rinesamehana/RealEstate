using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class fifnhafl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervimet_Shtepiat_ShtepiaId",
                table: "Rezervimet");

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervimet_Shtepiat_ShtepiaId",
                table: "Rezervimet",
                column: "ShtepiaId",
                principalTable: "Shtepiat",
                principalColumn: "ShtepiaId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervimet_Shtepiat_ShtepiaId",
                table: "Rezervimet");

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervimet_Shtepiat_ShtepiaId",
                table: "Rezervimet",
                column: "ShtepiaId",
                principalTable: "Shtepiat",
                principalColumn: "ShtepiaId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
