using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPNET_Core_and_Angular.Migrations
{
    public partial class ExtendedUserClass2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfBrith",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Interest",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Known",
                table: "Users");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Interests",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "KnownAs",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Interests",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "KnownAs",
                table: "Users");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBrith",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Interest",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Known",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
