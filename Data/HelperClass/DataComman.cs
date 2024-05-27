using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace ESite.Data.HelperClass
{
    public class DataComman
    {
        public const string ThumbPrefix = "Thumb_";

        public static string EncryptNumber(String Str)
        {
            String Key = "rytTHh42t5Aagite95R95erktlwe454asR1254fase5454un5g45Ka8vg54d45Sa5astg";
            byte[] keyArray;
            byte[] toEncryptArray = UTF8Encoding.UTF8.GetBytes(Str);

            MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
            keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(Key));

            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateEncryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);

            return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        }

        public static string DecryptNumber(String Str)
        {
            String Key = "rytTHh42t5Aagite95R95erktlwe454asR1254fase5454un5g45Ka8vg54d45Sa5astg";
            byte[] keyArray;
            byte[] toEncryptArray = Convert.FromBase64String(Str);
            MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
            keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(Key));
            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;
            ICryptoTransform cTransform = tdes.CreateDecryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
            return UTF8Encoding.UTF8.GetString(resultArray);
        }
        public static string GetBaseurl(IHttpContextAccessor httpContextAccessor)
        {
            string scheme = httpContextAccessor.HttpContext.Request.Scheme;
            string host = httpContextAccessor.HttpContext.Request.Host.Value;
            string url = $"{scheme}://{host}";
            return url;
        }
        public static string GetString(Exception ex)
        {

            //ErrorSignal.FromCurrentContext().Raise(ex);

            if (ex.InnerException != null)
                if (ex.InnerException.InnerException != null)
                    return Regex.Replace(ex.InnerException.InnerException.Message.Replace("'", "").Replace(@"""", ""), @"\t|\n|\r", "").Trim().Replace(Environment.NewLine, " ");
                else
                    return Regex.Replace(ex.InnerException.Message.Replace("'", "").Replace(@"""", ""), @"\t|\n|\r", "").Trim().Replace(Environment.NewLine, " ");
            else
                return Regex.Replace(ex.Message.Replace("'", "").Replace(@"""", "").Replace("\r\n", ""), @"\t|\n|\r", "").Trim().Replace(Environment.NewLine, " ");
        }
        public static DateTime DateTimeConvert(string Date)
        {
            if (Date.Contains("-"))
            {
                var temp = Date.Split("-".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);

                return new DateTime(Year, Month, Day);
            }
            else
            {
                var temp = Date.Split("/".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);
                return new DateTime(Year, Month, Day);
            }
        }
        public static DateTime DateTimeConvertRemoveTime(string Date)
        {
            string strdate = Date.Split(" ")[0];
            if (strdate.Contains("-"))
            {
                var temp = strdate.Split("-".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);

                return new DateTime(Year, Month, Day);
            }
            else
            {
                var temp = strdate.Split("/".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);
                return new DateTime(Year, Month, Day);
            }
        }
        public static DateTime? DateTimeConvertWithTime(string Date, string format)
        {
            try
            {
                DateTime dateTime = DateTime.ParseExact(Date, format, System.Globalization.CultureInfo.InvariantCulture);
                return dateTime;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static string StrDateConvert(string Date)
        {
            if (Date.Contains("-"))
            {
                var temp = Date.Split("-".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);

                return Year + "-" + Month + "-" + Day;
            }
            else
            {
                var temp = Date.Split("/".ToCharArray());

                int Day = Convert.ToInt32(temp[0]);
                int Month = Convert.ToInt32(temp[1]);
                int Year = Convert.ToInt32(temp[2]);
                return Year + "/" + Month + "/" + Day;
            }
        }
        public static TimeSpan TimeConvert(string time)
        {
            DateTime dateTime = DateTime.ParseExact(time, "hh:mm tt", CultureInfo.InvariantCulture);
            TimeSpan timeSpan = dateTime.TimeOfDay;
            return timeSpan;
        }
        public static DateTime GetDateTimeNow()
        {
            return DateTime.Now;
        }
        public static DateTime ConvertUTCDateTime(DateTime dateTime, string timeZoneById)
        {
            TimeZoneInfo indiaTimeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneById);
            DateTime convertDateTime = TimeZoneInfo.ConvertTimeFromUtc(dateTime, indiaTimeZone);
            return convertDateTime;
        }
        public static DateTime ConvertUTCtoTimeZoneDateTime(string timeZoneId = "", DateTime? date = null)
        {
            if (!string.IsNullOrEmpty(timeZoneId))
            {
                if (date == null)
                {
                    date = GetDateTimeNow();
                }
                TimeZoneInfo timeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneId);
                DateTime timeZoneDate = TimeZoneInfo.ConvertTimeFromUtc((DateTime)date, timeZone);
                return timeZoneDate;
            }
            else
            {
                return GetDateTimeNow();
            }
        }
        public static string Createkey(string code)
        {
            string password = "Aagite@" + code;
            byte[] keyBytes = new Rfc2898DeriveBytes(password, Encoding.UTF8.GetBytes(code), 1000).GetBytes(150);
            // string key = BitConverter.ToString(keyBytes).Replace("-", "");
            string key = Convert.ToBase64String(keyBytes);
            if (key.Length <= 380)
            {
                return key;
            }
            else
            {
                return key.Substring(0, 380);
            }
        }
        public static string generateotp(int otpLength = 6)
        {
            int minRange = Convert.ToInt32(Math.Pow(10, otpLength - 1)); // set the minimum range of the OTP
            int maxRange = Convert.ToInt32(Math.Pow(10, otpLength) - 1); // set the maximum range of the OTP

            Random random = new Random();
            int otp = random.Next(minRange, maxRange); // generate a random number within the range
            string otpString = otp.ToString().PadLeft(otpLength, '0');
            return otpString;
        }
        public static string generateQRCode(long memberId, long mainId, long id)
        {
            int otpLength = 6;
            int minRange = Convert.ToInt32(Math.Pow(10, otpLength - 1)); // set the minimum range of the OTP
            int maxRange = Convert.ToInt32(Math.Pow(10, otpLength) - 1); // set the maximum range of the OTP

            Random random = new Random();
            int otp = random.Next(minRange, maxRange); // generate a random number within the range
            string strdate = DateTime.Now.ToString("ddMMyyyyhhmmssff");
            string otpString = $"{otp.ToString().PadLeft(otpLength, '0')}{id}{memberId}{mainId}{strdate}";
            return otpString;
        }
        public static string GenerateRandomPassword(int length = 8)
        {
            const string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

            Random random = new Random();
            char[] password = new char[length];

            for (int i = 0; i < length; i++)
            {
                password[i] = characters[random.Next(characters.Length)];
            }

            return new string(password);
        }
        public static string EncodeString(string encodeMe)
        {
            byte[] encoded = System.Text.Encoding.UTF8.GetBytes(encodeMe);
            return Convert.ToBase64String(encoded);
        }

        public static string DecodeString(string decodeMe)
        {
            byte[] encoded = Convert.FromBase64String(decodeMe);
            return System.Text.Encoding.UTF8.GetString(encoded);
        }
        public static string DataProtect(string value)
        {
            try
            {
                string KeyStoragePath = $"{AppDomain.CurrentDomain.BaseDirectory}temp-keys/";
                var directoryInfo = new DirectoryInfo(KeyStoragePath);
                directoryInfo.Create();
                var dataProtectionProvider = DataProtectionProvider.Create(directoryInfo);// DataProtectionProvider.Create("Commune");
                var dataProtector = dataProtectionProvider.CreateProtector("WC7esUh7k8G7sxza4rlopaI0s2f2T5YQd4fa4f");
                return dataProtector.Protect(value);
            }
            catch (Exception)
            {
                return "";
            }
        }
        public static string DataUnprotect(string value)
        {
            try
            {
                string KeyStoragePath = $"{AppDomain.CurrentDomain.BaseDirectory}temp-keys/";
                var directoryInfo = new DirectoryInfo(KeyStoragePath);
                directoryInfo.Create();
                var dataProtectionProvider = DataProtectionProvider.Create(directoryInfo);// DataProtectionProvider.Create("Commune");
                var dataProtector = dataProtectionProvider.CreateProtector("WC7esUh7k8G7sxza4rlopaI0s2f2T5YQd4fa4f");
                return dataProtector.Unprotect(value);
            }
            catch (Exception)
            {
                return "";
            }
        }
        public static string ConvertImageUrlToBase64(string imageUrl)
        {
            try
            {
                using (WebClient webClient = new WebClient())
                {
                    byte[] imageBytes = webClient.DownloadData(imageUrl);
                    string base64String = Convert.ToBase64String(imageBytes);
                    return base64String;
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions that might occur during the conversion process
                Console.WriteLine("Error converting image to Base64: " + ex.Message);
                return "";
            }
        }

        public static string GetWkhtmlToPdfPath(string path, string bit)
        {
            // Check if the operating system is Windows
            if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows))
            {
                if (bit == "32")
                {
                    return Path.Combine(path, "dinktopdf", "32bit", "libwkhtmltox.dll");
                }
                else
                {
                    return Path.Combine(path, "dinktopdf", "64bit", "libwkhtmltox.dll");
                }
            }
            else if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux))
            {
                if (bit == "32")
                {
                    return Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dinktopdf", "32bit", "libwkhtmltox.so");
                }
                else
                {
                    return Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dinktopdf", "64bit", "libwkhtmltox.so");
                }
            }
            else
            {
                return Path.Combine(path, "dinktopdf", "32bit", "libwkhtmltox.dll");
            }
        }
        public static List<int> SplitAgeGroup(string ageGroup)
        {
            List<int> age = new List<int>();
            if (ageGroup == "70+")
            {
                age.Add(70);
                age.Add(150);
            }
            else
            {
                string[] strings = ageGroup.Split("-");
                age.Add(Convert.ToInt32(strings[0]));
                age.Add(Convert.ToInt32(strings[1]));
            }
            return age;
        }


    }

}
