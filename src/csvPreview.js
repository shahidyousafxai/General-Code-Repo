const handleShowDoc = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const rows = content.split('\n');
      const tableHtml = `
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead style="border-collapse: collapse;">
          <tr>
            ${rows[0]
          .split(',')
        .map((cell) => `<th style="text-align: center; padding: 3px;">${cell}</th>`)
          .join('')}
          </tr>
        </thead>
        <tbody>
          ${rows
          .slice(1)
          .map(
            (row) =>
              `<tr>${row
                .split(',')
                .map((cell) => `<td style="text-align: center; padding: 3px;">${cell}</td>`)
                .join('')}</tr>`
          )
          .join('')}
        </tbody>
      </table>
    `;
      const newWindow = window.open();
      newWindow.document.write(`<pre>${tableHtml}</pre>`);
    };
    reader.readAsText(allFile);
  };




<div className="cursor-pointer" onClick={handleShowDoc}>
  <VisibilityIcon className="text-[#A4A7AF] mt-1 text-base" />
</div>
