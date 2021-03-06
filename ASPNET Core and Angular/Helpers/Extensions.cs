﻿using ASPNET_Core_and_Angular.Data;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET_Core_and_Angular.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int CalulateAge(this DateTime theDatetime)
        {
            var age = DateTime.Today.Year - theDatetime.Year;
            if (theDatetime.AddYears(age) > DateTime.Today)
            {
                age--;
            }
            return age;
        }
    }
}
