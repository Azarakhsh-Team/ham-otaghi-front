/**
 * Static Address and Configs.
 */
export class Api {

  /**
   * Base Configure
   */
  public static readonly CLIENT_ID = '';

  /**
   * This variable will define limit in adding user CV item.
   * @type {string}
   */
  public static readonly FINAL_URL = 'www.hamotaghi.com';

  public static readonly USING_URL = 'https://' + Api.FINAL_URL + '/';

  public static readonly BASE_URL = Api.USING_URL + 'api/';


  public static readonly LOGIN = Api.BASE_URL + 'login';

}
