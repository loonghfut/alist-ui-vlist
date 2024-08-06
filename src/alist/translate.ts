const translations = {
    "common": {
        "mount_path": "Mount Path",
        "mount_path-tips": "The path you want to mount to, it is unique and cannot be repeated",
        "driver": "Driver",
        "order": "Order",
        "order-tips": "Use to sort",
        "status": "Status",
        "remark": "Remark",
        "cache_expiration": "Cache Expiration",
        "cache_expiration-tips": "The cache expiration time for this storage(minutes)",
        "down_proxy_url": "Download proxy URL",
        "web_proxy": "Web proxy",
        "webdav_policy": "WebDAV policy",
        "proxy_range": "Proxy Range",
        "proxy_range-tips": "Need to enable proxy",
        "webdav_policys": {
            "302_redirect": "302 redirect",
            "use_proxy_url": "use proxy URL",
            "native_proxy": "native proxy"
        },
        "order_by": "Order by",
        "order_bys": {
            "name": "Name",
            "size": "Size",
            "modified": "Modified"
        },
        "order_direction": "Order direction",
        "order_directions": {
            "asc": "Ascending",
            "desc": "Descending"
        },
        "extract_folder": "Extract folder",
        "extract_folders": {
            "front": "Extract to front",
            "back": "Extract to back"
        },
        "enable_sign": "Enable sign",
        "start_load_success": "Start loading",
        "load_all": "Reload All",
        "filter_by_driver": "Filter by driver",
        "table_layout": "Table layout"
    },
    "private": {
        "115 Cloud": {
            "cookie": "Cookie",
            "cookie-tips": "one of QR code token and cookie required",
            "limit_rate": "Limit rate",
            "limit_rate-tips": "limit all api request rate (1r/[limit_rate]s)",
            "page_size": "Page size",
            "page_size-tips": "list api per page size of 115 driver",
            "qrcode_source": "Qrcode source",
            "qrcode_source-tips": "select the QR code device, default linux",
            "qrcode_token": "Qrcode token",
            "qrcode_token-tips": "one of QR code token and cookie required",
            "root_folder_id": "Root folder id"
        },
        "115 Share": {
            "cookie": "Cookie",
            "cookie-tips": "one of QR code token and cookie required",
            "limit_rate": "Limit rate",
            "limit_rate-tips": "limit all api request rate (1r/[limit_rate]s)",
            "page_size": "Page size",
            "page_size-tips": "list api per page size of 115 driver",
            "qrcode_source": "Qrcode source",
            "qrcode_source-tips": "select the QR code device, default linux",
            "qrcode_token": "Qrcode token",
            "qrcode_token-tips": "one of QR code token and cookie required",
            "receive_code": "Receive code",
            "receive_code-tips": "receive code of 115 share link",
            "root_folder_id": "Root folder id",
            "share_code": "Share code",
            "share_code-tips": "share code of 115 share link"
        },
        "123Pan": {
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "123PanLink": {
            "origin_urls": "Origin urls",
            "origin_urls-tips": "structure:FolderName:\n  [FileSize:][Modified:]Url",
            "private_key": "Private key",
            "uid": "Uid",
            "valid_duration": "Valid duration",
            "valid_duration-tips": "minutes"
        },
        "123PanShare": {
            "accesstoken": "Accesstoken",
            "root_folder_id": "Root folder id",
            "sharekey": "Sharekey",
            "sharepassword": "Sharepassword"
        },
        "139Yun": {
            "authorization": "Authorization",
            "cloud_id": "Cloud id",
            "root_folder_id": "Root folder id",
            "type": "Type"
        },
        "189Cloud": {
            "cookie": "Cookie",
            "cookie-tips": "Fill in the cookie if need captcha",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "189CloudPC": {
            "family_id": "Family id",
            "family_transfer": "Family transfer",
            "no_use_ocr": "No use ocr",
            "order_by": "Order by",
            "order_direction": "Order direction",
            "password": "Password",
            "rapid_upload": "Rapid upload",
            "root_folder_id": "Root folder id",
            "type": "Type",
            "upload_method": "Upload method",
            "upload_thread": "Upload thread",
            "upload_thread-tips": "1\u003c=thread\u003c=32",
            "username": "Username",
            "validate_code": "Validate code"
        },
        "AList V2": {
            "access_token": "Access token",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "url": "Url"
        },
        "AList V3": {
            "meta_password": "Meta password",
            "pass_ua_to_upsteam": "Pass ua to upsteam",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "token": "Token",
            "url": "Url",
            "username": "Username"
        },
        "Alias": {
            "paths": "Paths",
            "protect_same_name": "Protect same name",
            "protect_same_name-tips": "Protects same-name files from Delete or Rename"
        },
        "Aliyundrive": {
            "internal_upload": "Internal upload",
            "order_by": "Order by",
            "order_bys": {
                "created_at": "Created at",
                "name": "Name",
                "size": "Size",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "ASC": "ASC",
                "DESC": "DESC"
            },
            "rapid_upload": "Rapid upload",
            "refresh_token": "Refresh token",
            "root_folder_id": "Root folder id"
        },
        "AliyundriveOpen": {
            "client_id": "Client id",
            "client_id-tips": "Keep it empty if you don't have one",
            "client_secret": "Client secret",
            "client_secret-tips": "Keep it empty if you don't have one",
            "drive_type": "Drive type",
            "drive_types": {
                "backup": "Backup",
                "default": "Default",
                "resource": "Resource"
            },
            "internal_upload": "Internal upload",
            "internal_upload-tips": "If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",
            "livp_download_format": "Livp download format",
            "livp_download_formats": {
                "jpeg": "Jpeg",
                "mov": "Mov"
            },
            "oauth_token_url": "Oauth token url",
            "order_by": "Order by",
            "order_bys": {
                "created_at": "Created at",
                "name": "Name",
                "size": "Size",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "ASC": "ASC",
                "DESC": "DESC"
            },
            "rapid_upload": "Rapid upload",
            "rapid_upload-tips": "If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",
            "refresh_token": "Refresh token",
            "remove_way": "Remove way",
            "remove_ways": {
                "delete": "Delete",
                "trash": "Trash"
            },
            "root_folder_id": "Root folder id"
        },
        "AliyundriveShare": {
            "order_by": "Order by",
            "order_bys": {
                "created_at": "Created at",
                "name": "Name",
                "size": "Size",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "ASC": "ASC",
                "DESC": "DESC"
            },
            "refresh_token": "Refresh token",
            "root_folder_id": "Root folder id",
            "share_id": "Share id",
            "share_pwd": "Share pwd"
        },
        "BaiduNetdisk": {
            "client_id": "Client id",
            "client_secret": "Client secret",
            "custom_crack_ua": "Custom crack ua",
            "custom_upload_part_size": "Custom upload part size",
            "custom_upload_part_size-tips": "0 for auto",
            "download_api": "Download api",
            "download_apis": {
                "crack": "Crack",
                "official": "Official"
            },
            "order_by": "Order by",
            "order_bys": {
                "name": "Name",
                "size": "Size",
                "time": "Time"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "refresh_token": "Refresh token",
            "root_folder_path": "Root folder path",
            "upload_api": "Upload api",
            "upload_thread": "Upload thread",
            "upload_thread-tips": "1\u003c=thread\u003c=32"
        },
        "BaiduPhoto": {
            "album_id": "Album id",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "delete_origin": "Delete origin",
            "refresh_token": "Refresh token",
            "show_type": "Show type",
            "show_types": {
                "root": "Root",
                "root_only_album": "Root only album",
                "root_only_file": "Root only file"
            },
            "upload_thread": "Upload thread",
            "upload_thread-tips": "1\u003c=thread\u003c=32"
        },
        "BaiduShare": {
            "BDUSS": "BDUSS",
            "pwd": "Pwd",
            "root_folder_path": "Root folder path",
            "surl": "Surl"
        },
        "ChaoXingGroupDrive": {
            "bbsid": "Bbsid",
            "cookie": "Cookie",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "user_name": "User name"
        },
        "Cloudreve": {
            "address": "Address",
            "cookie": "Cookie",
            "custom_ua": "Custom ua",
            "enable_thumb_and_folder_size": "Enable thumb and folder size",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "username": "Username"
        },
        "Crypt": {
            "directory_name_encryption": "Directory name encryption",
            "directory_name_encryptions": {
                "false": "False",
                "true": "True"
            },
            "encrypted_suffix": "Encrypted suffix",
            "encrypted_suffix-tips": "for advanced user only! encrypted files will have this suffix",
            "filename_encoding": "Filename encoding",
            "filename_encoding-tips": "for advanced user only!",
            "filename_encodings": {
                "base32": "Base32",
                "base32768": "Base32768",
                "base64": "Base64"
            },
            "filename_encryption": "Filename encryption",
            "filename_encryptions": {
                "obfuscate": "Obfuscate",
                "off": "Off",
                "standard": "Standard"
            },
            "password": "Password",
            "password-tips": "the main password",
            "remote_path": "Remote path",
            "remote_path-tips": "This is where the encrypted data stores",
            "salt": "Salt",
            "salt-tips": "If you don't know what is salt, treat it as a second password. Optional but recommended",
            "show_hidden": "Show hidden",
            "show_hidden-tips": "show hidden directories and files",
            "thumbnail": "Thumbnail",
            "thumbnail-tips": "enable thumbnail which pre-generated under .thumbnails folder"
        },
        "Doge": {
            "access_key_id": "Access key id",
            "add_filename_to_disposition": "Add filename to disposition",
            "add_filename_to_disposition-tips": "Add filename to Content-Disposition header.",
            "bucket": "Bucket",
            "custom_host": "Custom host",
            "endpoint": "Endpoint",
            "force_path_style": "Force path style",
            "list_object_version": "List object version",
            "list_object_versions": {
                "v1": "V1",
                "v2": "V2"
            },
            "placeholder": "Placeholder",
            "region": "Region",
            "remove_bucket": "Remove bucket",
            "remove_bucket-tips": "Remove bucket name from path when using custom host.",
            "root_folder_path": "Root folder path",
            "secret_access_key": "Secret access key",
            "session_token": "Session token",
            "sign_url_expire": "Sign url expire"
        },
        "Dropbox": {
            "client_id": "Client id",
            "client_id-tips": "Keep it empty if you don't have one",
            "client_secret": "Client secret",
            "client_secret-tips": "Keep it empty if you don't have one",
            "oauth_token_url": "Oauth token url",
            "refresh_token": "Refresh token",
            "root_folder_path": "Root folder path"
        },
        "FTP": {
            "address": "Address",
            "encoding": "Encoding",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "username": "Username"
        },
        "FeijiPan": {
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "GoogleDrive": {
            "chunk_size": "Chunk size",
            "chunk_size-tips": "chunk size while uploading (unit: MB)",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "order_by": "Order by",
            "order_by-tips": "such as: folder,name,modifiedTime",
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "refresh_token": "Refresh token",
            "root_folder_id": "Root folder id"
        },
        "GooglePhoto": {
            "client_id": "Client id",
            "client_secret": "Client secret",
            "refresh_token": "Refresh token",
            "root_folder_id": "Root folder id",
            "show_archive": "Show archive"
        },
        "HalalCloud": {
            "app_id": "App id",
            "app_secret": "App secret",
            "app_version": "App version",
            "refresh_token": "Refresh token",
            "refresh_token-tips": "login type is refresh_token,this is required",
            "root_folder_path": "Root folder path",
            "upload_thread": "Upload thread",
            "upload_thread-tips": "1 \u003c= thread \u003c= 32"
        },
        "ILanZou": {
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "IPFS API": {
            "endpoint": "Endpoint",
            "gateway": "Gateway",
            "root_folder_path": "Root folder path"
        },
        "Lanzou": {
            "account": "Account",
            "baseUrl": "BaseUrl",
            "baseUrl-tips": "basic URL for file operation",
            "cookie": "Cookie",
            "cookie-tips": "about 15 days valid, ignore if shareUrl is used",
            "password": "Password",
            "repair_file_info": "Repair file info",
            "repair_file_info-tips": "To use webdav, you need to enable it",
            "root_folder_id": "Root folder id",
            "shareUrl": "ShareUrl",
            "shareUrl-tips": "used to get the sharing page",
            "share_password": "Share password",
            "type": "Type",
            "types": {
                "account": "Account",
                "cookie": "Cookie",
                "url": "Url"
            },
            "user_agent": "User agent"
        },
        "Lark": {
            "app_id": "App id",
            "app_id-tips": "app id",
            "app_secret": "App secret",
            "app_secret-tips": "app secret",
            "external_mode": "External mode",
            "external_mode-tips": "external mode",
            "root_folder_path": "Root folder path",
            "tenant_url_prefix": "Tenant url prefix",
            "tenant_url_prefix-tips": "tenant url prefix"
        },
        "LenovoNasShare": {
            "host": "Host",
            "host-tips": "You can change it to your local area network",
            "root_folder_path": "Root folder path",
            "share_id": "Share id",
            "share_id-tips": "The part after the last / in the shared link",
            "share_pwd": "Share pwd",
            "share_pwd-tips": "The password of the shared link"
        },
        "Local": {
            "mkdir_perm": "Mkdir perm",
            "recycle_bin_path": "Recycle bin path",
            "recycle_bin_path-tips": "path to recycle bin, delete permanently if empty or keep 'delete permanently'",
            "root_folder_path": "Root folder path",
            "show_hidden": "Show hidden",
            "show_hidden-tips": "show hidden directories and files",
            "thumb_cache_folder": "Thumb cache folder",
            "thumbnail": "Thumbnail",
            "thumbnail-tips": "enable thumbnail"
        },
        "MediaTrack": {
            "access_token": "Access token",
            "order_by": "Order by",
            "order_bys": {
                "size": "Size",
                "title": "Title",
                "updated_at": "Updated at"
            },
            "order_desc": "Order desc",
            "project_id": "Project id",
            "root_folder_id": "Root folder id"
        },
        "Mega_nz": {
            "email": "Email",
            "password": "Password",
            "two_fa_code": "Two fa code",
            "two_fa_code-tips": "2FA 6-digit code, filling in the 2FA code alone will not support reloading driver",
            "two_fa_secret": "Two fa secret",
            "two_fa_secret-tips": "2FA secret"
        },
        "MoPan": {
            "cloud_id": "Cloud id",
            "device_info": "Device info",
            "order_by": "Order by",
            "order_bys": {
                "filename": "Filename",
                "filesize": "Filesize",
                "lastOpTime": "LastOpTime"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "password": "Password",
            "phone": "Phone",
            "root_folder_id": "Root folder id",
            "sms_code": "Sms code",
            "sms_code-tips": "input 'send' send sms ",
            "upload_thread": "Upload thread",
            "upload_thread-tips": "1\u003c=thread\u003c=32"
        },
        "NeteaseMusic": {
            "cookie": "Cookie",
            "song_limit": "Song limit",
            "song_limit-tips": "only get 200 songs by default"
        },
        "Onedrive": {
            "chunk_size": "Chunk size",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "custom_host": "Custom host",
            "custom_host-tips": "Custom host for onedrive download link",
            "is_sharepoint": "Is sharepoint",
            "redirect_uri": "Redirect uri",
            "refresh_token": "Refresh token",
            "region": "Region",
            "regions": {
                "cn": "Cn",
                "de": "De",
                "global": "Global",
                "us": "Us"
            },
            "root_folder_path": "Root folder path",
            "site_id": "Site id"
        },
        "Onedrive Sharelink": {
            "password": "Password",
            "root_folder_path": "Root folder path",
            "url": "Url"
        },
        "OnedriveAPP": {
            "chunk_size": "Chunk size",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "custom_host": "Custom host",
            "custom_host-tips": "Custom host for onedrive download link",
            "email": "Email",
            "region": "Region",
            "regions": {
                "cn": "Cn",
                "de": "De",
                "global": "Global",
                "us": "Us"
            },
            "root_folder_path": "Root folder path",
            "tenant_id": "Tenant id"
        },
        "PikPak": {
            "client_id": "Client id",
            "client_secret": "Client secret",
            "disable_media_link": "Disable media link",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "PikPakShare": {
            "client_id": "Client id",
            "client_secret": "Client secret",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "share_id": "Share id",
            "share_pwd": "Share pwd",
            "username": "Username"
        },
        "Quark": {
            "cookie": "Cookie",
            "order_by": "Order by",
            "order_bys": {
                "file_name": "File name",
                "file_type": "File type",
                "none": "None",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "root_folder_id": "Root folder id"
        },
        "Quqi": {
            "cdn": "Cdn",
            "cdn-tips": "If you enable this option, the download speed can be increased, but there will be some performance loss",
            "cookie": "Cookie",
            "cookie-tips": "Cookie can be used on multiple clients at the same time",
            "password": "Password",
            "phone": "Phone",
            "root_folder_id": "Root folder id"
        },
        "S3": {
            "access_key_id": "Access key id",
            "add_filename_to_disposition": "Add filename to disposition",
            "add_filename_to_disposition-tips": "Add filename to Content-Disposition header.",
            "bucket": "Bucket",
            "custom_host": "Custom host",
            "endpoint": "Endpoint",
            "force_path_style": "Force path style",
            "list_object_version": "List object version",
            "list_object_versions": {
                "v1": "V1",
                "v2": "V2"
            },
            "placeholder": "Placeholder",
            "region": "Region",
            "remove_bucket": "Remove bucket",
            "remove_bucket-tips": "Remove bucket name from path when using custom host.",
            "root_folder_path": "Root folder path",
            "secret_access_key": "Secret access key",
            "session_token": "Session token",
            "sign_url_expire": "Sign url expire"
        },
        "SFTP": {
            "address": "Address",
            "ignore_symlink_error": "Ignore symlink error",
            "passphrase": "Passphrase",
            "password": "Password",
            "private_key": "Private key",
            "root_folder_path": "Root folder path",
            "username": "Username"
        },
        "SMB": {
            "address": "Address",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "share_name": "Share name",
            "username": "Username"
        },
        "Seafile": {
            "address": "Address",
            "password": "Password",
            "repoId": "RepoId",
            "repoPwd": "RepoPwd",
            "root_folder_path": "Root folder path",
            "token": "Token",
            "username": "Username"
        },
        "Teambition": {
            "cookie": "Cookie",
            "order_by": "Order by",
            "order_bys": {
                "created": "Created",
                "fileName": "FileName",
                "fileSize": "FileSize",
                "updated": "Updated"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "Asc": "Asc",
                "Desc": "Desc"
            },
            "project_id": "Project id",
            "region": "Region",
            "regions": {
                "china": "China",
                "international": "International"
            },
            "root_folder_id": "Root folder id",
            "use_s3_upload_method": "Use s3 upload method"
        },
        "Terabox": {
            "cookie": "Cookie",
            "download_api": "Download api",
            "download_apis": {
                "crack": "Crack",
                "official": "Official"
            },
            "order_by": "Order by",
            "order_bys": {
                "name": "Name",
                "size": "Size",
                "time": "Time"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "root_folder_path": "Root folder path"
        },
        "Thunder": {
            "captcha_token": "Captcha token",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "username": "Username"
        },
        "ThunderBrowser": {
            "captcha_token": "Captcha token",
            "password": "Password",
            "remove_way": "Remove way",
            "remove_ways": {
                "delete": "Delete",
                "trash": "Trash"
            },
            "root_folder_id": "Root folder id",
            "safe_password": "Safe password",
            "use_video_url": "Use video url",
            "username": "Username"
        },
        "ThunderBrowserExpert": {
            "algorithms": "Algorithms",
            "algorithms-tips": "sign type is algorithms,this is required",
            "captcha_sign": "Captcha sign",
            "captcha_sign-tips": "sign type is captcha_sign,this is required",
            "captcha_token": "Captcha token",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "client_version": "Client version",
            "device_id": "Device id",
            "download_user_agent": "Download user agent",
            "login_type": "Login type",
            "login_types": {
                "refresh_token": "Refresh token",
                "user": "User"
            },
            "package_name": "Package name",
            "password": "Password",
            "password-tips": "login type is user,this is required",
            "refresh_token": "Refresh token",
            "refresh_token-tips": "login type is refresh_token,this is required",
            "remove_way": "Remove way",
            "remove_ways": {
                "delete": "Delete",
                "trash": "Trash"
            },
            "root_folder_id": "Root folder id",
            "safe_password": "Safe password",
            "safe_password-tips": "super safe password",
            "sign_type": "Sign type",
            "sign_types": {
                "algorithms": "Algorithms",
                "captcha_sign": "Captcha sign"
            },
            "timestamp": "Timestamp",
            "timestamp-tips": "sign type is captcha_sign,this is required",
            "use_video_url": "Use video url",
            "user_agent": "User agent",
            "username": "Username",
            "username-tips": "login type is user,this is required"
        },
        "ThunderExpert": {
            "algorithms": "Algorithms",
            "algorithms-tips": "sign type is algorithms,this is required",
            "captcha_sign": "Captcha sign",
            "captcha_sign-tips": "sign type is captcha_sign,this is required",
            "captcha_token": "Captcha token",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "client_version": "Client version",
            "device_id": "Device id",
            "download_user_agent": "Download user agent",
            "login_type": "Login type",
            "login_types": {
                "refresh_token": "Refresh token",
                "user": "User"
            },
            "package_name": "Package name",
            "password": "Password",
            "password-tips": "login type is user,this is required",
            "refresh_token": "Refresh token",
            "refresh_token-tips": "login type is refresh_token,this is required",
            "root_folder_id": "Root folder id",
            "sign_type": "Sign type",
            "sign_types": {
                "algorithms": "Algorithms",
                "captcha_sign": "Captcha sign"
            },
            "timestamp": "Timestamp",
            "timestamp-tips": "sign type is captcha_sign,this is required",
            "use_video_url": "Use video url",
            "user_agent": "User agent",
            "username": "Username",
            "username-tips": "login type is user,this is required"
        },
        "ThunderX": {
            "captcha_token": "Captcha token",
            "password": "Password",
            "root_folder_id": "Root folder id",
            "use_video_url": "Use video url",
            "username": "Username"
        },
        "ThunderXExpert": {
            "algorithms": "Algorithms",
            "algorithms-tips": "sign type is algorithms,this is required",
            "captcha_sign": "Captcha sign",
            "captcha_sign-tips": "sign type is captcha_sign,this is required",
            "captcha_token": "Captcha token",
            "client_id": "Client id",
            "client_secret": "Client secret",
            "client_version": "Client version",
            "device_id": "Device id",
            "download_user_agent": "Download user agent",
            "login_type": "Login type",
            "login_types": {
                "refresh_token": "Refresh token",
                "user": "User"
            },
            "package_name": "Package name",
            "password": "Password",
            "password-tips": "login type is user,this is required",
            "refresh_token": "Refresh token",
            "refresh_token-tips": "login type is refresh_token,this is required",
            "root_folder_id": "Root folder id",
            "sign_type": "Sign type",
            "sign_types": {
                "algorithms": "Algorithms",
                "captcha_sign": "Captcha sign"
            },
            "timestamp": "Timestamp",
            "timestamp-tips": "sign type is captcha_sign,this is required",
            "use_video_url": "Use video url",
            "user_agent": "User agent",
            "username": "Username",
            "username-tips": "login type is user,this is required"
        },
        "Trainbit": {
            "AUSHELLPORTAL": "AUSHELLPORTAL",
            "apikey": "Apikey",
            "root_folder_id": "Root folder id"
        },
        "UC": {
            "cookie": "Cookie",
            "order_by": "Order by",
            "order_bys": {
                "file_name": "File name",
                "file_type": "File type",
                "none": "None",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "root_folder_id": "Root folder id"
        },
        "USS": {
            "anti_theft_chain_token": "Anti theft chain token",
            "bucket": "Bucket",
            "endpoint": "Endpoint",
            "operator_name": "Operator name",
            "operator_password": "Operator password",
            "root_folder_path": "Root folder path",
            "sign_url_expire": "Sign url expire"
        },
        "UrlTree": {
            "head_size": "Head size",
            "head_size-tips": "Use head method to get file size, but it may be failed.",
            "url_structure": "Url structure",
            "url_structure-tips": "structure:FolderName:\n  [FileName:][FileSize:][Modified:]Url"
        },
        "VTencent": {
            "cookie": "Cookie",
            "order_by": "Order by",
            "order_bys": {
                "CreatTime": "CreatTime",
                "Name": "Name",
                "Size": "Size",
                "UpdateTime": "UpdateTime"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "Asc": "Asc",
                "Desc": "Desc"
            },
            "root_folder_id": "Root folder id",
            "tf_uid": "Tf uid"
        },
        "Virtual": {
            "max_file_size": "Max file size",
            "min_file_size": "Min file size",
            "num_file": "Num file",
            "num_folder": "Num folder",
            "root_folder_path": "Root folder path"
        },
        "WebDav": {
            "address": "Address",
            "password": "Password",
            "root_folder_path": "Root folder path",
            "tls_insecure_skip_verify": "Tls insecure skip verify",
            "username": "Username",
            "vendor": "Vendor",
            "vendors": {
                "other": "Other",
                "sharepoint": "Sharepoint"
            }
        },
        "WeiYun": {
            "cookies": "Cookies",
            "order_by": "Order by",
            "order_bys": {
                "name": "Name",
                "size": "Size",
                "updated_at": "Updated at"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "root_folder_id": "Root folder id",
            "upload_thread": "Upload thread",
            "upload_thread-tips": "4\u003c=thread\u003c=32"
        },
        "WoPan": {
            "access_token": "Access token",
            "family_id": "Family id",
            "family_id-tips": "Keep it empty if you want to use your personal drive",
            "refresh_token": "Refresh token",
            "root_folder_id": "Root folder id",
            "sort_rule": "Sort rule",
            "sort_rules": {
                "name_asc": "Name asc",
                "name_desc": "Name desc",
                "size_asc": "Size asc",
                "size_desc": "Size desc",
                "time_asc": "Time asc",
                "time_desc": "Time desc"
            }
        },
        "YandexDisk": {
            "client_id": "Client id",
            "client_secret": "Client secret",
            "order_by": "Order by",
            "order_bys": {
                "created": "Created",
                "modified": "Modified",
                "name": "Name",
                "path": "Path",
                "size": "Size"
            },
            "order_direction": "Order direction",
            "order_directions": {
                "asc": "Asc",
                "desc": "Desc"
            },
            "refresh_token": "Refresh token",
            "root_folder_path": "Root folder path"
        },

    },
    "drivers": {
        "115 Cloud": "115 Cloud",
        "115 Share": "115 Share",
        "123Pan": "123Pan",
        "123PanLink": "123PanLink",
        "123PanShare": "123PanShare",
        "139Yun": "139Yun",
        "189Cloud": "189Cloud",
        "189CloudPC": "189CloudPC",
        "AList V2": "AList V2",
        "AList V3": "AList V3",
        "Alias": "Alias",
        "Aliyundrive": "Aliyundrive",
        "AliyundriveOpen": "AliyundriveOpen",
        "AliyundriveShare": "AliyundriveShare",
        "BaiduNetdisk": "BaiduNetdisk",
        "BaiduPhoto": "BaiduPhoto",
        "BaiduShare": "BaiduShare",
        "ChaoXingGroupDrive": "ChaoXingGroupDrive",
        "Cloudreve": "Cloudreve",
        "Crypt": "Crypt",
        "Doge": "Doge",
        "Dropbox": "Dropbox",
        "FTP": "FTP",
        "FeijiPan": "FeijiPan",
        "GoogleDrive": "GoogleDrive",
        "GooglePhoto": "GooglePhoto",
        "HalalCloud": "HalalCloud",
        "ILanZou": "ILanZou",
        "IPFS API": "IPFS API",
        "Lanzou": "Lanzou",
        "Lark": "Lark",
        "LenovoNasShare": "LenovoNasShare",
        "Local": "Local",
        "MediaTrack": "MediaTrack",
        "Mega_nz": "Mega nz",
        "MoPan": "MoPan",
        "NeteaseMusic": "NeteaseMusic",
        "Onedrive": "Onedrive",
        "Onedrive Sharelink": "Onedrive Sharelink",
        "OnedriveAPP": "OnedriveAPP",
        "PikPak": "PikPak",
        "PikPakShare": "PikPakShare",
        "Quark": "Quark",
        "Quqi": "Quqi",
        "S3": "S3",
        "SFTP": "SFTP",
        "SMB": "SMB",
        "Seafile": "Seafile",
        "Teambition": "Teambition",
        "Terabox": "Terabox",
        "Thunder": "Thunder",
        "ThunderBrowser": "ThunderBrowser",
        "ThunderBrowserExpert": "ThunderBrowserExpert",
        "ThunderExpert": "ThunderExpert",
        "ThunderX": "ThunderX",
        "ThunderXExpert": "ThunderXExpert",
        "Trainbit": "Trainbit",
        "UC": "UC",
        "USS": "USS",
        "UrlTree": "UrlTree",
        "VTencent": "VTencent",
        "Virtual": "Virtual",
        "WebDav": "WebDav",
        "WeiYun": "WeiYun",
        "WoPan": "WoPan",
        "YandexDisk": "YandexDisk"
    }
};

export const _N = (drvname: string) => (translations.drivers as Record<string, string>)[drvname] || drvname;

export const _T = function (drv: string, key: string): string | Record<string, string> {
    drv = (translations.drivers as any)[drv] || drv;
    if (drv in translations.private && key in (translations.private as any)[drv])
        return (translations.private as any)[drv][key];
    else return (translations.common as any)[key] || key;
}