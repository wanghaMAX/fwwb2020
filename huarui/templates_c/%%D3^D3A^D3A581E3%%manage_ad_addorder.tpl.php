<?php /* Smarty version 2.6.19, created on 2009-09-03 14:38:25
         compiled from manage_ad_addorder.tpl */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>�ޱ����ĵ�</title>
<link media="screen" href="../style/admin.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/calendar.js"></script>
</head>
<body>
<table class="addurl">
	<tr>
		<td width="680" colspan="2"><div class="tb_title f14"><b>��ӹ�涩��</b></div></td>
	</tr>
<form action="manage_ad.php?act=addorder" method="post" enctype="multipart/form-data" name="form1" id="form1">
	<tr>
		<td width="80" class="a_rt">�������λ</td>
		<td><select name="adid">
  <?php $_from = $this->_tpl_vars['adList']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['item']):
?>
    <option value="<?php echo $this->_tpl_vars['item']['adid']; ?>
"<?php if ($this->_tpl_vars['item']['adid'] == $_GET['adid']): ?> selected="selected"<?php endif; ?>><?php echo $this->_tpl_vars['item']['name']; ?>
</option>
	<?php endforeach; endif; unset($_from); ?>
  </select>
 </td>
	</tr>
		<td class="a_rt">�������</td>
		<td><input name="title" type="text" id="title" size="40" /></td>
	</tr>
		<td class="a_rt">�������</td>
		<td>
 <?php $_from = $this->_tpl_vars['class']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['item']):
?>
<input name="class" type="radio" value="<?php echo $this->_tpl_vars['key']; ?>
"<?php if ($this->_tpl_vars['key'] == 1): ?> checked="checked"<?php endif; ?> />
<?php echo $this->_tpl_vars['item']; ?>

<?php endforeach; endif; unset($_from); ?>
</td>
	</tr>
		<td class="a_rt">���ֹ��</td>
		<td><input name="text" type="text" id="text" size="40" /></td>
	</tr>
		<td class="a_rt">ͼƬ���</td>
		<td><input type="file" name="file" />
		</td>
	</tr>
		<td class="a_rt">����ַ</td>
		<td><input name="url" type="text" id="url" size="40" /></td>
	</tr>
		<td class="a_rt">js���</td>
		<td><textarea name="code" cols="40" rows="4" id="code"></textarea></td>
	</tr>
		<td class="a_rt">�۸�</td>
		<td><input name="price" type="text" id="price" size="6" />Ԫ/��</td>
	</tr>
		<td class="a_rt">��ʼ����</td>
		<td><input name="startdate" type="text" id="startdate" value="<?php echo $this->_tpl_vars['startdate']; ?>
" size="10" maxlength="10" onclick="setday(this.id)" /> 
    ��������
    <input name="stopdate" type="text" id="stopdate" value="<?php echo $this->_tpl_vars['stopdate']; ?>
" size="10" maxlength="10" onclick="setday(this.id)" />�����ڸ�ʽ: YYYY-M-D��
</td>
	</tr>
		<td class="a_rt">״̬</td>
		<td><input type="radio" name="state" value="0" />
    �����</label>&nbsp;&nbsp;
    <label>
    <input name="state" type="radio" value="1" checked="checked" />
    ���ͨ��</td>
	</tr>
	<tr>
		<td colspan="2"><input type="submit" name="Submit" value="ȷ�����" /></td>
	</tr>
</table>
</form>
<p>&nbsp;</p>
</body>
</html>